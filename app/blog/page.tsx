// app/blog/page.tsx
import BlogOne from "@/components/brilio/insights/BlogOne";
import "./../../components/brilio/insights/blog.css";

export default async function BlogPage() {
  return (
    <main className="p-4">
      <div className="relative m-auto flex flex-col items-start gap-2 lg:container">
        <div className="flex justify-between w-full items-baseline mb-4">
          <h1 className="md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            Blog
          </h1>
        </div>
        {/* <BlogList
          query={{ type: "blog-posts" }}
          sort="-created_at"
          limit={10}
          skip={0}
          className="mx-auto grid w-full grid-cols-1 flex-col gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        /> */}
        <div className="blog">
          <BlogOne limit={1000} />
        </div>
      </div>
    </main>
  );
}
