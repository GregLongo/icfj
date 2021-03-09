/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)


module.exports = {
  /* Your site config here */
  pathPrefix: `/icfj`,
  plugins: [{
  	 resolve: 'gatsby-plugin-emotion'
  	 },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`    
  ],
}
