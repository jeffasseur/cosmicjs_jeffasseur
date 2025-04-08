/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// import { TimeAgo } from "@/cosmic/elements/TimeAgo";

import { CategoryType } from "./CategoryPill";

export type VideoType = {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  metadata: {
    video_link: string;
    thumbnail: {
      imgix_url: string;
    };
    video: {
      url: string;
    };
    description: string;
    categories: CategoryType[];
    channel: {
      slug: string;
      title: string;
      metadata: {
        thumbnail: {
          imgix_url: string;
        };
      };
    };
  };
};

export function VideoCard({
  video,
  className,
}: {
  video: VideoType;
  className?: string;
}) {
  return (
    <div data-cosmic-object={video.id}>
      <Link href={`/videos/${video.slug}`}>
        <img
          alt={video.title}
          className="h-[175px] w-full rounded-lg object-cover 2xl:h-[250px]"
          src={`${video.metadata.thumbnail?.imgix_url}?w=1200&auto=format,compression`}
        />
        <div className="relative mb-2">
          <h2 className="mt-2 text-2xl font-bold text-black dark:text-white">
            {video.title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
