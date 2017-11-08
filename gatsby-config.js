module.exports = {
  siteMetadata: {
    title: `My True Voice`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-manifest`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
