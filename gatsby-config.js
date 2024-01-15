require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://christopher-toplisek-software-dev.co.uk",
    title: "Christopher Toplisek's Portfolio",
    author: `Christopher Toplisek`,
    description: "Welcome to Christopher Toplisek's portfolio. Explore my work and achievements.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120
      }
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        environment: process.env.DATOCMS_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Christopher Toplisek Portfolio",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#f0f0f0",
        theme_color: "#db3000",
        icon: "src/portfolio-logo.png",
      },
    },
  ],
}
