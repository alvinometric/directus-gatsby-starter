module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        // Your project's URL
        url: `https://alvin-alt.directus.app`,
        auth: {
          // Use the credentials that you received by email
          // when you created your project or a user's
          email: "hello@alvin.codes",
          password: "Jpr8O5m73ekvB839v1QQQVbA",
        },
      },
    },
  ],
};
