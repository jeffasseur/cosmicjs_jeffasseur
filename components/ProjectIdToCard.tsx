// components/product-card.tsx
import Link from "next/link";
import { cosmic } from "@/cosmic/client";

export async function ProjectIdToCard({ id }: { id: string }) {
  const { object: project } = await cosmic.objects
    .findOne({
      type: "projects",
      id: id,
    })
    .props("title,slug,metadata")
    .depth(1);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block relative aspect-square drop-shadow-md rounded-2xl p-0 bg-cover bg-center w-full overflow-hidden transition-all transition-500 ease-in-out cursor-pointer bg-dark-90 lg:duration-300 hover:scale-105 hover:shadow-md"
      style={{
        backgroundImage: `url(${project.metadata.image.imgix_url}?w=1200&auto=format,compression)`,
      }}
    >
      <div
        className="absolute inset-0 bg-projectCard-gradient"
        style={{
          background:
            "linear-gradient(-160deg, transparent 50%, rgb(11, 12, 200) 95%)",
        }}
      >
        <p className="absolute top-4 right-4 px-4 py-2 bg-dark-90 bg-opacity-15 backdrop-blur rounded-full text-white border border-white text-xs">
          {project.metadata.category.title}
        </p>
        <div className="h-full p-6">
          <div className="h-full flex justify-between items-end w-full">
            <div className="flex flex-col gap-1 leading-none rounded-2xl mt-auto mb-2 text-lg font-semibold drop-shadow-sm tracking-tight text-light-70">
              <span className="text-xs uppercase tracking-wide">
                {project.metadata.client.title}
              </span>
              <span className="text-lg lg:text-3xl text-light-90">
                {project.title}
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
