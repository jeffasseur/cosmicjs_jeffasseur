// app/page.tsx
import { ProjectCard } from "@/components/project-card";
import { ProjectType } from "@/interfaces";
import { cosmic } from "@/cosmic/client";
import PortfolioOne from "@/components/brilio/works/PortfolioOne";

export default async function WorkPage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "work",
    })
    .props("slug,title,metadata")
    .depth(1);

  const { objects: projects } = await cosmic.objects
    .find({
      type: "projects",
    })
    .props("id,slug,title,metadata")
    .depth(1);

  return (
    <main className="p-4">
      <section className="pb-8 m-auto">
        <div className="m-auto flex container flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            {page.metadata.h1}
          </h1>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
              className="text-xl text-zinc-700 dark:text-zinc-300"
            />
          </div>
          <PortfolioOne query={{ type: "projects" }} limit={1000} />
          {/* <div className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {projects.map((project: ProjectType) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div> */}
        </div>
      </section>
    </main>
  );
}
