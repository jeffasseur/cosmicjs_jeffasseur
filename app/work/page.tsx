// app/page.tsx
import { ProjectCard } from "@/components/project-card";
import { ProjectType } from "@/interfaces";
import { cosmic } from "@/cosmic/client";

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
      <section className="md:container pb-8 m-auto">
        <div className="m-auto flex max-w-[950px] flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            {page.metadata.h1}
          </h1>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
              className="text-xl text-zinc-700 dark:text-zinc-300"
            />
          </div>
          <div>
            <div className="flex">
              <input
                type="text"
                className="p-2 rounded-md border border-light-90"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-light-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 17.5l5 5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8">
            {projects.map((project: ProjectType) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
