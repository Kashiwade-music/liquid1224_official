require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports={
  graphqlTypegen: true,
  siteMetadata: {
    title: `liquid1224_official`,
    siteUrl: `https://liquid1224.net`,
    description: "@liquid1224のオフィシャルサイトです。"
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};