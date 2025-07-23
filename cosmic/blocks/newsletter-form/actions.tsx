"use server";

import { cosmic } from "@/cosmic/client";
import { Resend } from "resend";
const RESEND_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "change_to_your_email@example.com";
const resend = new Resend(RESEND_KEY);

export type AddSubmissionType = {
  type: "newsletter-submissions";
  metadata: {
    email: string;
  };
};

export async function addSubmission(comment: AddSubmissionType) {
  const { metadata: metadata } = comment;
  console.log("Adding submission:", comment);
  const hubspotResponse = await postNewsletterSubmission({
    email: metadata.email,
  });
  if (!hubspotResponse.ok) {
    throw new Error("Failed to submit to HubSpot");
  }
  const data = await cosmic.objects.insertOne(comment);
  const submitterSubject = `Form submission received`;
  const submitterHTML = `
    Hello,<br/><br/>
    Thank you for signing up for the newsletter.<br/><br/>
    Email: ${metadata.email}<br/>
    <br/>
    We will keep you updated with the latest news and updates.<br/><br/>
    Best regards,<br/>
    JEF .F
  `;
  // Send confirmation email
  await sendEmail({
    to: metadata.email,
    from: CONTACT_EMAIL,
    reply_to: CONTACT_EMAIL,
    subject: submitterSubject,
    html: submitterHTML,
  });
  const adminSubject = `New newsletter subscription`;
  const adminHTML = `
    You have a new subscriber to the newsletter.<br/><br/>
    Email: ${metadata.email}<br/>
  `;
  // Send email to admin
  await sendEmail({
    to: CONTACT_EMAIL,
    from: CONTACT_EMAIL,
    reply_to: metadata.email,
    subject: adminSubject,
    html: adminHTML,
  });
  return data;
}

async function sendEmail({
  from,
  to,
  subject,
  html,
  reply_to,
}: {
  from: string;
  to: string;
  subject: string;
  html: string;
  reply_to: string;
}) {
  const data = await resend.emails.send({
    from,
    to,
    subject,
    html,
    replyTo: reply_to,
  });
  return data;
}

async function postNewsletterSubmission({ email }: { email: string }) {
  const hubspotUrl = process.env.HUBSPOT_FORM_ACTION_URL;
  if (!hubspotUrl) {
    throw new Error(
      "HUBSPOT_FORM_ACTION_URL environment variable is not defined."
    );
  }
  const response = await fetch(hubspotUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      fields: [
        {
          name: "email",
          value: email,
        },
      ],
    }),
  });
  return response;
}
