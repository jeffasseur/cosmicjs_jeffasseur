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

const BlogOne = async () => {
	const { objects: blogs } = await cosmic.objects
      .find({ type: "blog-posts" })
      .props("id,slug,title,metadata")
      .depth(1)
      .sort("-created_at")
      .limit(3)
      .status("published");

	return (
		<div className="row items flex flex-col justify-between max-w-[80%] mx-auto md:max-w-none md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{blogs.map((blog: PostType) => (
				<div key={blog.id} className="col-12 md:col-6 lg:col-4 item group">
					{/* Blog Post */}
					<div className="card blog-item">
						<div className="image-holder aspect-square overflow-hidden">
							{/* Card Thumbnail */}
							<a className="card-thumb object-cover rounded-md overflow-hidden" href={`/blog/${blog.slug}`}>
								<img src={blog.metadata.image.imgix_url} alt={blog.title} className='h-full w-full object-cover rounded-md group-hover:scale-110 transition-all duration-500 ease-in-out' />
							</a>
							<div className="card-overlay top fade-down">
								<div className="logo">
									<img src={blog.metadata.author.metadata.image.imgix_url} alt="Logo" />
								</div>
								<div className="post-meta d-flex flex-column ms-3">
									<span>Posted by</span>
									<span className="post-author"><strong>{blog.metadata.author.title}</strong></span>
								</div>
							</div>
						</div>
						{/* Card Content */}
						<div className="card-content mt-3">
							<div className="heading flex flex-col gap-1">
								<div className="post-meta flex">
									<span className="post-date text-sm text-gray-700">
										{blog.metadata.published_date}
									</span>
								</div>
								<h4 className="my-2 text-2xl group-hover:opacity-60 group-hover:underline transition-all duration-300 ease-in-out">
									<a href={`/blog/${blog.slug}`}>{blog.title}</a>
								</h4>
								<div className="card-terms">
									{blog.metadata.categories.map((category, index) => (
										<p key={index} className="bg-light-80 px-4 py-2 rounded-full hover:bg-light-90 hover:translate-y-1 transition-all duration-300 ease-in-out">{category.title}</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogOne;
