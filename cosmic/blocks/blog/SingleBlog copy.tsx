// app/blog/[slug]/page.tsx
import { cosmic } from "@/cosmic/client";
import Markdown from "react-markdown";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Comments } from "@/cosmic/blocks/comments/Comments";
import { getFormattedDate } from "@/cosmic/utils";
import CtaSection from "@/components/CtaSection";

import "./blog-rich-text.css";

export async function SingleBlogCopy({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  try {
    const { object: blog } = await cosmic.objects
      .findOne(query)
      .props("id,slug,title,metadata")
      .depth(1)
      .status(status ? status : "published");

    const date = getFormattedDate(blog.metadata.published_date);

    return (
      <div className={className}>
        <section className="m-auto items-center pb-8 md:container">
          <div className="relative m-auto flex max-w-7xl flex-col items-start gap-2">
            {/* Back to blog link for smaller screens */}
            <div className="lg:top-2">
              <Link
                href="/blog"
                className="flex text-primary dark:text-light-50"
              >
                <ArrowLeftIcon className="mr-2 mt-1 h-4 w-4" /> Back to blog
              </Link>
            </div>

            {/* Top section with title and short description */}
            <div className="py-4 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:mb-6 lg:py-10 w-full">
              <div className="flex flex-col gap-2 lg:gap-6 lg:w-3/5">
                {/* Left section: date, title, buttons */}
                <span className="font-extrabold text-light-50 text-sm">
                  {date}
                </span>
                <h1 className="text-3xl font-semibold leading-snug tracking-tighter text-primary w-full dark:text-white sm:text-4xl md:text-5xl dark:font-semibold dark:tracking-tight">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {blog.metadata.categories.map((category: any) => {
                    return (
                      <span
                        className="py-2 px-4 border border-light-50 rounded-full mr-2 text-xs font-semibold uppercase tracking-wide text-light-50 dark:text-light-70 dark:border-light-70"
                        key={category.slug}
                      >
                        {category.title}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="lg:w-2/5">
                <p className="line-clamp-4 w-full pt-3 lg:text-lg text-dark-80 dark:text-light-70">
                  {blog.metadata?.intro.slice(0, 250)}...
                </p>
              </div>
            </div>
            <div className="mb-10 w-full overflow-hidden rounded-xl">
              <img
                src={`${blog.metadata.image?.imgix_url}?w=2000&auto=format,compression`}
                alt={blog.title}
                className="aspect-video w-full object-cover"
              />
            </div>
            <Markdown className="mx-auto space-y-4 text-black dark:text-light-80 max-w-3xl mb-12 blog-rich-text">
              {blog.metadata.content}
            </Markdown>
            <div className="mb-8 md:flex mx-auto max-w-3xl w-full items-center justify-between">
              <div className="flex items-center">
                <img
                  className="mr-3 h-[48px] w-[48px] rounded-full object-cover"
                  src={`${blog.metadata.author.metadata?.image?.imgix_url}?w=120&auto=format,compression`}
                  alt={blog.metadata.author.title}
                />
                <div className="">
                  <span className="font-semibold text-dark-80 dark:text-light-80">
                    {blog.metadata.author.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="my-10">
              <Link
                href="/blog"
                className="flex text-primary dark:text-light-50"
              >
                <ArrowLeftIcon className="mr-2 mt-1 h-4 w-4" /> Back to blog
              </Link>
            </div>
          </div>
        </section>
        <section className="my-0 lg:my-8">
          <div className="container">
            <CtaSection />
          </div>
        </section>
      </div>
    );
  } catch (e: any) {
    if (e.status === 404) return notFound();
  }
}
