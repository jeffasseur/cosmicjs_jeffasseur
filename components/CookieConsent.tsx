"use client";

import { useState, useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Cookies from "js-cookie";
import Link from "next/link";

enum CookieConsentState {
  Accepted = "Accepted",
  Declined = "Declined",
  NotAnswered = "Not answered",
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
const cookieConsentPage =
  "https://www.iubenda.com/privacy-policy/15316412/cookie-policy";

const CookieConsent = () => {
  const [cookieConsentState, setCookieConsentState] = useState(
    CookieConsentState.NotAnswered
  );

  useEffect(() => {
    const state = Cookies.get("cookie-consent-state");
    if (state) setCookieConsentState(state as CookieConsentState);
  }, []);

  const handleConsent = (state: CookieConsentState) => {
    Cookies.set("cookie-consent-state", state);
    Cookies.set("analytics", "enabled", { expires: 365 });
    setCookieConsentState(state);
  };

  if (cookieConsentState === CookieConsentState.NotAnswered) {
    return (
      <div className="fixed max-w-[30rem] bottom-2 right-2 p-4 bg-light-90 rounded-lg flex flex-col gap-4 z-[99999999] dark:bg-light-50">
        <h3 className="font-normal lg:text-3xl">We value your privacy</h3>
        <p>
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept", you
          consent to our use of cookies. You can manage your preferences or
          learn more by visiting our Cookie Consent page.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <button
            onClick={() => handleConsent(CookieConsentState.Accepted)}
            className="btn dark:!bg-primary dark:hover:!bg-dark-30"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent(CookieConsentState.Declined)}
            className="btn !bg-dark-10 hover:!bg-dark-20 dark:!bg-light-30 dark:hover:!bg-light-10"
          >
            Decline
          </button>
          <Link
            href={cookieConsentPage}
            target="_blank"
            className="flex gap-2 shrink-0"
          >
            🍪
            <span className="underline text-light-90">Cookie Consent</span>
          </Link>
        </div>
      </div>
    );
  }

  if (cookieConsentState === CookieConsentState.Accepted) {
    return <GoogleTagManager gtmId={GTM_ID} />;
  }

  return (
    <button
      className="fixed bottom-4 right-4 btn !rounded-full"
      onClick={() => setCookieConsentState(CookieConsentState.NotAnswered)}
    >
      <span>🍪</span>
    </button>
  );
};

export default CookieConsent;
