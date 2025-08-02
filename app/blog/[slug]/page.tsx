// app/blog/[slug]/page.tsx
import { SingleBlog } from "@/cosmic/blocks/blog/SingleBlog";
import { SingleBlogCopy } from "@/cosmic/blocks/blog/SingleBlog copy";
import { cosmic } from "@/cosmic/client";

export const revalidate = 60;

export async function generateStaticParams() {
  const { objects: posts } = await cosmic.objects.find({
    type: "blog-posts",
  });
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  return <SingleBlogCopy query={{ slug: params.slug, type: "blog-posts" }} />;
}
