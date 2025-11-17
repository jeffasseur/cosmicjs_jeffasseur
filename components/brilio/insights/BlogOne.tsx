import React from 'react';
import { cosmic } from "@/cosmic/client";

export type PostType = {
  id: string;
  title: string;
  slug: string;
  metadata: {
    categories: [
      {
        title: string;
        slug: string;
      }
    ];
    image: {
      imgix_url: string;
    };
    content: string;
    author: {
      title: string;
      thumbnail: string;
      metadata: {
        image: {
          imgix_url: string;
        };
      };
    };
    published_date: string;
  };
};

const BlogOne = async ({ limit }: { limit: number | null }) => {
  const { objects: blogs } = await cosmic.objects
    .find({ type: "blog-posts" })
    .props("id,slug,title,metadata")
    .depth(1)
    .sort("-created_at")
    .limit(limit ? limit : 3)
    .status("published");

  return (
    <div className="row items flex flex-col justify-between mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog: PostType) => (
        <div key={blog.id} className="col-12 md:col-6 lg:col-4 item group">
          {/* Blog Post */}
          <div className="aspect-[4/3] overflow-hidden">
            {/* Card Thumbnail */}
            <a
              className="rounded-md !overflow-hidden"
              href={`/blog/${blog.slug}`}
            >
              <img
                src={blog.metadata.image.imgix_url}
                alt={blog.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
          {/* Card Content */}
          <div className="card-content mt-3">
            <div className="heading flex flex-col gap-1">
              <div className="post-meta flex">
                <span className="post-date text-sm text-gray-700">
                  {blog.metadata.published_date}
                </span>
              </div>
              <h4 className="my-2 text-2xl font-semibold group-hover:opacity-60 group-hover:underline transition-all duration-300 ease-in-out">
                <a href={`/blog/${blog.slug}`}>{blog.title}</a>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogOne;
