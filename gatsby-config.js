/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Pravink Tattoos`,
    siteUrl: `https://pravinktattoos.com`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
{
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wqxh6wum",  // replace with your Sanity project ID
        dataset: "production",                // or your dataset
        token: process.env.SANITY_TOKEN,     // optional, for private datasets
        watchMode: true,
        overlayDrafts: true,
      },
    }],
};