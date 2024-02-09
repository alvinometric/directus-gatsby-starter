import path from "path";

export const createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
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
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  `);

  result.data.directus.pages.forEach((page) => {
    createPage({
      path: `/blog/${page.slug}`,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        page,
      },
    });
  });
};
