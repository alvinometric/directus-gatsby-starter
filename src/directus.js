import { useStaticQuery, graphql } from "gatsby";

export const useGlobalMetadata = () => {
	const { directus } = useStaticQuery(graphql`
    {
      directus {
        global {
          title
        }
      }
    }
  `);

	return directus.global;
};
