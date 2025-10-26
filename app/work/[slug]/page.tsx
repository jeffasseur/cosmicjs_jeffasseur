// app/projects/[slug]/page.tsx
import { cosmic } from "@/cosmic/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { ArrowRightIcon } from "lucide-react";
import { metadata } from "../../layout";
import { Testimonial } from "@/cosmic/blocks/testimonials/Testimonial";

export const revalidate = 60;

export async function generateStaticParams() {
  const { objects: projects } = await cosmic.objects.find({
    type: "projects",
  });
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

export default async function SingleProjectsPage(props0: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props0.params;
  const { object: project } = await cosmic.objects
    .findOne({
      type: "projects",
      slug: params.slug,
    })
    .props("id,slug,title,metadata")
    .depth(1);

  const { object: testimonial } = await cosmic.objects
    .findOne({
      type: "testimonials",
      "project.slug": params.slug,
    })
    .props("id,slug,title,metadata")
    .depth(1);

  return (
    <main className="p-4">
      <section className="mt-0 mb-0">
        <div className="mb-0 md:mb-12 container pt-12 md:pt-28 text-black mx-auto relative w-full dark:text-light-90">
          <div className="relative">
            <Link
              href={project.metadata?.live_link ?? "#"}
              target="_blank"
              className="flex gap-5"
            >
              <h1 className="mb-6 text-4xl font-thin md:text-7xl lg:mb-10 *:opacity-0">
                {project.title}
              </h1>
              <ArrowRightIcon className="w-6 h-6 mt-2 self-start -rotate-45" />
            </Link>
            <div className="flex flex-col md:flex-row ml-2 gap-12 flex-wrap *:flex-grow">
              <div className="flex flex-col gap-2">
                <p className="tag">Client</p>
                <p className="text-sm md:text-base">
                  {project.metadata.client.title}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="tag">Industry</p>
                <p className="text-sm md:text-base">
                  {project.metadata.client.metadata?.industry}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="tag">Services</p>
                <Link
                  href={`/services/${project.metadata.category.slug}`}
                  className="flex flex-wrap gap-4 text-sm md:text-base"
                >
                  <span>{project.metadata.category.title}</span>
                </Link>
              </div>
              {
                // only show if there is a collab
                project.metadata.collab && (
                  <div className="flex flex-col gap-2">
                    <p className="tag">Collab with</p>
                    <p className="text-sm md:text-base">
                      {project.metadata.collab.title}
                    </p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="mt-8 container">
          {project.metadata.image && !project.metadata.hero_video && (
            <img
              src={`${project.metadata.image?.imgix_url}?w=2000&auto=format,compression`}
              alt={project.title}
              className="aspect-square lg:aspect-video w-full mx-auto object-cover border border-zinc-100 dark:border-zinc-800 rounded-lg"
            />
          )}
          {project.metadata.hero_video && (
            <div className="w-full aspect-video mt-8">
              <video
                className="w-full h-full object-cover rounded-lg overflow-hidden"
                src={project.metadata.hero_video.imgix_url}
                autoPlay
                loop
                muted
              />
            </div>
          )}
        </div>
      </section>

      <section className="mt-0 md:container lg:my-8 grid items-center pb-8 mx-auto">
        <div className="relative m-auto flex max-w-[750px] flex-col items-start gap-2 p-4 md:p-8 lg:p-10 bg-light-90 bg-opacity-50 rounded-xl dark:bg-dark-80 shadow-lg">
          <h2 className="mb-6">About the project</h2>
          <div
            className="text-zinc-700 dark:text-zinc-300 space-y-4"
            dangerouslySetInnerHTML={{ __html: project.metadata.content }}
          />
          {/* Video */}
          {project.metadata.mockup_video && (
            <>
              <h3 className="mt-12">Extra media</h3>
              {project.metadata.mockup_video?.imgix_url && (
                <div className="w-full aspect-video mt-8">
                  <video
                    className="w-full h-full object-cover rounded-lg overflow-hidden"
                    src={project.metadata.mockup_video.imgix_url}
                    controls
                    loop
                    muted
                    autoPlay
                  />
                </div>
              )}
            </>
          )}
          <div className="my-10">
            <Link href="/work" className="flex text-primary dark:text-light-50">
              <ArrowLeftIcon className="w-4 h-4 mr-2 mt-1" /> Back to projects
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="px-0 container md:px-8 pb-8">
          <div className="md:mx-2 lg:mx-12 py-10 md:py-20 bg-light-90 dark:bg-light-40 rounded-2xl md:rounded-[3rem] px-4 md:p-24 shadow-lg">
            <Testimonial testimonial={testimonial} />
          </div>
        </div>
      </section>
      <section className="my-0 lg:my-8">
        <div className="container">
          <CtaSection />
        </div>
      </section>
    </main>
  );
}
