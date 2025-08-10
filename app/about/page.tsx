// app/page.tsx
import { cosmic } from "@/cosmic/client";
import { Testimonials } from "@/cosmic/blocks/testimonials/Testimonials";
import BlogSection from "@/components/brilio/insights/BlogSections";
// import { TeamList } from "@/cosmic/blocks/team/TeamList";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { metadata } from "../layout";
import Image from "next/image";
import { Link as LinkType } from "@/interfaces";

export default async function AboutPage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "about",
    })
    .props("slug,title,metadata")
    .depth(1);
  const { object: settings } = await cosmic.objects
    .findOne({
      type: "global-settings",
      slug: "settings",
    })
    .props("metadata")
    .depth(1);
  return (
    <main className="py-4">
      <section className="m-auto items-center pb-8 lg:container">
        <div className="relative m-auto flex flex-col items-start gap-2">
          {/* Top section with title and short description */}
          <div className="py-4 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:mb-6 lg:py-10 w-full">
            <div className="flex flex-col gap-2 lg:gap-6">
              {/* Left section: date, title, buttons */}
              <span className="text-primary">About me</span>
              <h1 className="text-3xl font-semibold leading-snug tracking-tighter w-full dark:text-white sm:text-4xl md:text-6xl dark:font-semibold dark:tracking-tight">
                {page.metadata.h1}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`https://linkedin.com/in/jef-fasseur`}
                  target="_blank"
                  className="flex items-center py-2 px-4 border border-light-50 rounded-full mr-2 text-xs font-semibold uppercase tracking-wide text-light-50 dark:text-light-70 dark:border-light-70 hover:bg-light-50 hover:text-white transition-all hover:shadow-inner hover:translate-y-1"
                >
                  Jef Fasseur
                </Link>
                {/** Social media */}
                {settings.metadata.links.map((link: LinkType) => {
                  return (
                    <Link
                      href={link.url}
                      key={link.url}
                      target="_blank"
                      className="py-2 px-4 border border-light-50 rounded-full mr-2 text-xs font-semibold uppercase tracking-wide text-light-50 dark:text-light-70 dark:border-light-70 hover:bg-light-50 hover:text-white transition-all hover:shadow-inner hover:translate-y-1"
                    >
                      <img
                        className="h-[26px]"
                        src={`${link.icon.imgix_url}?w=500&auto=format,compression`}
                        alt={link.company}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-2/5">
              <p className="line-clamp-4 w-full pt-3 lg:text-lg text-dark-80 dark:text-light-70">
                {page.metadata.subheadline}
              </p>
              <Link
                href={`/contact`}
                className="btn btn-outline inline-flex gap-2 items-center"
              >
                <span className="">Let's talk</span>
                <ArrowLeftIcon className="h-5 w-5 rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg aspect-[5/4] lg:aspect-video overflow-hidden shadow-xl">
          <Image
            src={`${page.metadata.image?.imgix_url}?w=2000&auto=format,compression`}
            alt={page.metadata.h1}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </section>

      <section className="lg:container">
        <div dangerouslySetInnerHTML={{ __html: page.metadata.content }} />
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

      <BlogSection />

      {/* <div className="mt-4 md:mt-8 w-full bg-zinc-50 dark:bg-zinc-900 px-4">
        <section className="py-8 w-full md:max-w-7xl mx-auto">
          <h2 className="w-full mb-4 text-2xl md:text-4xl font-display text-zinc-900 dark:text-zinc-100 tracking-tighter justify-center flex">
            Our team
          </h2>
          <TeamList
            query={{ type: "team-members" }}
            className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2"
          />
        </section>
      </div> */}
    </main>
  );
}
