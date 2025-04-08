/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";
import { notFound } from "next/navigation";


// import { CategoryPill, CategoryType } from "./CategoryPill";
import { PlayArea } from "./PlayArea";


export async function SingleVideo({
  video,
  className,
  status,
}: {
  video: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
    return (
      <div className={className}>
        <div className="w-full">
          <PlayArea video={video} />
          {/* <video controls muted>
            <source src={video.metadata.video_link} />
          </video> */}
        </div>
        <section
          className="m-auto mb-8 grid items-center p-4 py-8 md:container"
          data-cosmic-object={video.id}
        >
          <div className="relative m-auto flex w-full flex-col items-start gap-2 md:w-[750px]">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white md:text-4xl">
              {video.title}
            </h1>
            {/* <div className="mb-2 gap-4 md:flex">
              <div className="flex md:absolute md:right-0">
                {video.metadata.categories.map((category: CategoryType) => {
                  return <CategoryPill key={category.id} category={category} />;
                })}
              </div>
            </div> */}
            {/* <div
              className="space-y-4 text-zinc-700 dark:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: video.metadata?.description }}
            /> */}
          </div>
        </section>
      </div>
    );
}
