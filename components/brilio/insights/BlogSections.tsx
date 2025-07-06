import React from 'react';
import BlogOne from './BlogOne';
import "./blog.css";

const BlogSection = ({ title = "Insights", viewAllLink = "/blog" }) => {
return (
	<section className="blog">
		<div className="container">
			<div className="row">
				<div className="col-12">
					{/* Intro */}
					<div className="intro flex justify-between items-center">
					<h3 className="title">{title}</h3>
					<a className="btn btn-outline content-btn swap-icon" href={viewAllLink}>
						View All
					</a>
					</div>
				</div>
			</div>
			{/* BlogOne Component */}
			<BlogOne />
		</div>
	</section>
);
};

export default BlogSection;
