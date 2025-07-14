// app/page.tsx
import { ProjectCard } from "@/components/project-card";
import { ProjectType } from "@/interfaces";
import { cosmic } from "@/cosmic/client";
import PortfolioSection from "@/components/brilio/works/PortfolioSection";
import PortfolioTwo from "@/components/brilio/portfolio/PortfolioSection";

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
          <div className="mt-6 w-full grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {projects.map((project: ProjectType) => (
              <div
                key={project.id}
                className="col-12 col-lg-4 item filter-item"
                // data-groups={project.categories}
              >
                {/* Portfolio Item */}
                <div className="card portfolio-item layout-2 scale has-shadow">
                  <div className="image-holder">
                    {/* Card Thumb */}
                    <a className="card-thumb" href={`/work/${project.slug}`}>
                      <img
                        src={project.metadata.image.imgix_url}
                        alt={project.title}
                      />
                    </a>
                  </div>
                  {/* Card content */}
                  <div className="card-content p-2">
                    <div className="heading">
                      <h4 className="title mt-2 mt-md-3 mb-3">
                        {project.title}
                      </h4>
                      <div className="show-project">
                        <div className="card-terms">
                          <p className="terms badge">
                            {project.metadata.category.title}
                          </p>
                          <p className="terms badge">
                            {project.metadata.service.title}
                          </p>
                        </div>
                        <div className="project-link">
                          <a href={`/work/${project.slug}`}>Show Project</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
