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
        </div>
        <div
          className="mb-8 grid items-center py-4"
          data-cosmic-object={video.id}
        >
          <div className="relative flex w-full flex-col items-start gap-2">
            <h3 className="leading-tight tracking-tighter text-black dark:text-white md:text-2xl">
              {video.title}
            </h3>
          </div>
        </div>
      </div>
    );
}
