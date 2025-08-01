// app/page.tsx
import { cosmic } from "@/cosmic/client";
import { Testimonials } from "@/cosmic/blocks/testimonials/Testimonials";
import BlogSection from "@/components/brilio/insights/BlogSections";
// import { TeamList } from "@/cosmic/blocks/team/TeamList";

export default async function AboutPage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "about",
    })
    .props("slug,title,metadata")
    .depth(1);
  return (
    <main className="py-4">
      <section className="pb-8 m-auto px-4">
        <div className="m-auto max-w-[950px] flex flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100">
            {page.metadata.h1}
          </h1>
          <p>{page.metadata?.subheadline}</p>
          <div
            dangerouslySetInnerHTML={{ __html: page.metadata?.content }}
            className="text-zinc-700 dark:text-zinc-300"
          />
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
