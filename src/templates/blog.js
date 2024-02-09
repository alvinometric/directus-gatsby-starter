import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogTemplate = ({ pageContext }) => {
	const { page } = pageContext;
	const image = getImage(page.image.imageFile);

	return (
		<div style={{ margin: "0 auto", maxWidth: "58ch" }}>
			<GatsbyImage image={image} alt={page.title} />
			<h1>{page.title}</h1>
			<section>{page.content}</section>
		</div>
	);
};

export default BlogTemplate;
