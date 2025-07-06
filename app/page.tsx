// app/page.tsx
import { FAQs } from "@/cosmic/blocks/faqs/FAQs";
import { Testimonials } from "@/cosmic/blocks/testimonials/Testimonials";
import Hero_text_buttons_benefits from "@/components/Hero_text_buttons_benefits";
import { cosmic } from "@/cosmic/client";
import { ProjectCard } from "@/components/project-card";
import LogoSlider from "@/components/brilio/logoSlider/LogoSlider";
import Link from "next/link";
import { ContentInterface, ProjectType } from "@/interfaces";
import ServiceRow from "@/components/ServiceRow";
import Head from "next/head";
import PortfolioSection from "@/components/brilio/works/PortfolioSection";
import { ItemType } from "../cosmic/blocks/navigation-menu/NavMenu";
import BlogSection from "@/components/brilio/insights/BlogSections";

export default async function HomePage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "home",
    })
    .props("slug,title,metadata")
    .depth(1);

  const { objects: services } = await cosmic.objects
    .find({
      type: "services",
    })
    .props("id,slug,title,metadata")
    .depth(1);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JEF .F | Web(flow) Developer & Photographer",
              url: "https://www.jeffasseur.be",
              author: {
                "@type": "Person",
                name: "Jef Fasseur",
              },
            }),
          }}
        />
      </Head>
      <Hero_text_buttons_benefits page={page} />

      <LogoSlider />

      <PortfolioSection />

      <section id="services">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center">Services</h2>
          <div className="flex flex-col gap-8 mb-12">
            {services.map((service: ContentInterface, index: number) => {
              return <ServiceRow key={index} service={service} />;
            })}
          </div>
        </div>
      </section>

      <section className="mx-2 lg:mx-12 py-20 bg-light-90 dark:bg-light-40 rounded-[3rem] px-4 md:p-24 shadow-lg">
        <div className="container">
          <h2>Don't take our word for it</h2>
          <Testimonials
            query={{ type: "testimonials" }}
            status="published"
            className="mt-12 flex flex-col gap-6"
          />
        </div>
      </section>

      <section className="mt-12 pb-8 m-auto px-4" id="faq">
        <div className="container mx-auto">
          <h2 className="mb-8 text-dark-90 dark:text-light-90 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQs query={{ slug: "home", type: "pages" }} />
          </div>
        </div>
      </section>

      <BlogSection />
    </>
  );
}
