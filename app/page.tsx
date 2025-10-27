// app/page.tsx
import { FAQs } from "@/cosmic/blocks/faqs/FAQs";
import { Testimonials } from "@/cosmic/blocks/testimonials/Testimonials";
import Hero_text_buttons_benefits from "@/components/Hero_text_buttons_benefits";
import { cosmic } from "@/cosmic/client";
import { ProjectCard } from "@/components/project-card";
import LogoSlider from "@/components/brilio/logoSlider/LogoSlider";
import Link from "next/link";
import { ContentInterface } from "@/interfaces";
import ServiceRow from "@/components/ServiceRow";
import Head from "next/head";
import PortfolioSection from "@/components/brilio/works/PortfolioSection";
import { ItemType } from "../cosmic/blocks/navigation-menu/NavMenu";
import BlogSection from "@/components/brilio/insights/BlogSections";
import PortfolioOverview from "@/components/brilio/works/PortfolioOverview";

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

  let projectsQuery: any = { type: "projects", status: "published" };
  projectsQuery = {
    type: "projects",
    $and: [{ status: "published", "metadata.featured": true }],
  };

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta
          name="description"
          content={
            page.metadata?.description || "Web(flow) Developer & Photographer"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.jeffasseur.be" />
        <meta property="og:title" content={page.title} />
        <meta
          property="og:description"
          content={
            page.metadata?.description || "Web(flow) Developer & Photographer"
          }
        />
        <meta property="og:url" content="https://www.jeffasseur.be" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.title} />
        <meta
          name="twitter:description"
          content={
            page.metadata?.description || "Web(flow) Developer & Photographer"
          }
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfi4sldbm/image/upload/v1744035563/JEF-F-avatar-small_fcltdi.webp"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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

      {/* <PortfolioSection /> */}
      <section className="pb-8 m-auto">
        <div className="m-auto">
          {/* Intro */}
          <div
            className={`flex justify-between items-center relative mb-10 w-full`}
          >
            <h2>Featured projects</h2>
            <Link
              className={`btn btn-outline content-btn hidden lg:block`}
              href="/work"
            >
              View all projects
            </Link>
          </div>
          <PortfolioOverview query={projectsQuery} limit={4} />
        </div>
      </section>

      <section id="services">
        <div className="lg:container mx-auto">
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

      <section className="mt-12 pb-8 m-auto" id="faq">
        <div className="">
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
