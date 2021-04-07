/**
 * Configure your Gatsby site with this file.
 *
 * See: https://wwgw.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  pathPrefix: `/sites/default/files/annual-report-2020`,
  // pathPrefix: `/icfj-bestinshow`,
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "jlv7xwm",
        },
          display: "swap",
      },
    },
    //   {
    //     resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //     options: {
    //       production: true,
    //   },
    // },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        verbose: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`    
  ],
}
