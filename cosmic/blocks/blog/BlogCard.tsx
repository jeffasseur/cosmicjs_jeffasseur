import Link from "next/link";
import { getFormattedDate } from "@/cosmic/utils";

export type PostType = {
  id: string;
  title: string;
  slug: string;
  metadata: {
    categories: any;
    image: {
      imgix_url: string;
    };
    content: string;
    author: {
      title: string;
      metadata: {
        image: {
          imgix_url: string;
        };
      };
    };
    published_date: string;
  };
};

export function BlogCard({
  post,
  className,
}: {
  post: PostType;
  className?: string;
}) {
  return (
    <article className={className}>
      <Link
        className="linear group relative flex h-full w-full flex-col overflow-hidden rounded-lg shadow-md
        shadow-gray-500/20 transition duration-300 hover:bg-white hover:shadow-xl dark:shadow-none dark:hover:bg-dark-40"
        href={`/blog/${post.slug}`}
      >
        <div className="relative">
          <div className="absolute top-4 left-4">
            {post.metadata.categories.map((category: any) => {
              return (
                <span
                  className="mr-2 text-xs font-semibold uppercase tracking-wide text-white px-3 py-2 bg-light-50 rounded-sm"
                  key={category.slug}
                >
                  {category.title}
                </span>
              );
            })}
          </div>
          <img
            alt={post.title}
            className="w-full aspect-[3/2] object-cover"
            src={`${post.metadata.image.imgix_url}?w=1200&auto=format,compression`}
          />
        </div>
        <div className="flex h-full flex-col justify-between rounded-b-lg px-5 py-4">
          <div className="relative flex flex-col z-10 h-full">
            <h2 className="mt-2 text-2xl font-bold text-black dark:text-white grow">
              {post.title}
            </h2>
            {/* <p className="line-clamp-3 w-full pt-1 text-gray-600 dark:text-gray-400">
              {post.metadata.content.slice(0, 200)}...
            </p> */}
          </div>
          <div
            className="relative z-10 flex w-full flex-col items-start justify-between 
          space-y-10 pt-8 md:flex-row md:items-center md:space-y-0"
          >
            <div className="flex w-full items-center gap-10 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center overflow-hidden 
                rounded-full"
                >
                  <img
                    alt={post.metadata.author.title}
                    src={`${post.metadata.author.metadata.image.imgix_url}?w=400&auto=format,compression`}
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <div>
                    <span className="font-semibold">
                      {post.metadata.author.title}
                    </span>
                    <br />
                    {getFormattedDate(post.metadata.published_date)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
