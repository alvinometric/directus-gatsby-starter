import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useGlobalMetadata } from "../directus";

const IndexPage = ({ data }) => {
  const pages = data.directus.pages;
  const global = useGlobalMetadata();

  return (
    <main>
      <h1>{global.title}</h1>
      {pages.map((page) => {
        const image = getImage(page.image.imageFile);
        return (
          <article key={page.slug}>
            <GatsbyImage image={image} alt={page.title} />
            <h2>{page.title}</h2>
            <Link to={`/blog/${page.slug}`}>Read More</Link>
            <hr />
          </article>
        );
      })}
    </main>
  );
};

export const query = graphql`
  {
    directus {
      pages {
        title
        content
        slug
        image {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
