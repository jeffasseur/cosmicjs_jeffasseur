// app/contact/page.tsx
import CtaSection from "@/components/CtaSection";
import TypeForm from "@/components/TypeForm";
import { ContactForm } from "@/cosmic/blocks/contact-form/ContactForm";
import { Testimonials } from "@/cosmic/blocks/testimonials/Testimonials";
import { cosmic } from "@/cosmic/client";
import Link from "next/link";

export default async function ContactPage() {
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);

  type Link = {
    url: string;
    company: string;
    icon: {
      imgix_url: string;
    };
  };

  return (
    <main className="py-4">
      <header className="py-12">
        <div className="px-4 md:container md:mx-auto">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-6 justify-between max-w-2xl">
              <h1 className="text-4xl md:text-6xl *:opacity-0">
                Let's chat about your project
              </h1>
              <div>
                <p className="font-sm mb-6 max-w-[27rem]">
                  We are always available for a chat, an online coffee or a
                  project. You can reach us by email or social media.
                </p>
                <h3 className="text-xl font-medium">Follow us</h3>
                <ul className="mt-4 flex items-center gap-6">
                  {/** Social media */}
                  {settings.metadata?.links.map((link: Link, index: number) => {
                    return (
                      <li
                        className="dark:bg-light-50 dark:p-2 dark:rounded-sm flex justify-center items-center"
                        key={index}
                      >
                        <Link
                          href={link.url}
                          key={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="h-[26px]"
                            src={`${link.icon.imgix_url}?w=500&auto=format,compression`}
                            alt={link.company}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="px-6 py-12 rounded-2xl border-2 border-neutral-200 shadow-md mt-24">
              <h3 className="text-2xl mb-6 font-medium">Send us a message</h3>
              <ContactForm className="w-full max-w-[500px] m-auto my-10" />
            </div>
          </div>
        </div>
      </header>
      <section className="mx-2 lg:mx-12 py-20 bg-light-90 dark:bg-light-40 rounded-[3rem] px-4 md:p-24 shadow-lg">
        <div className="container">
          <h2>Don't take our word for it</h2>
          <Testimonials
            query={{ type: "testimonials", limit: 3, orderBy: "random" }}
            className="mt-12 flex gap-6"
          />
        </div>
      </section>
      <section id="project-inquiry" className="pt-12">
        <div className="container">
          <h2>Do you have a concrete idea?</h2>
          <div className="p-2">
            <TypeForm />
          </div>
        </div>
      </section>
    </main>
  );
}
