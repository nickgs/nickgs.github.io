module.exports = {
  siteMetadata: {
    title: `Nick Selvaggio - Long Island Technology`,
    description: `Long Island technology and web development.`,
    author: `@direct`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nickgs.com`,
        short_name: `nickgs`,
        start_url: `/`,
        background_color: `#496f87`,
        theme_color: `#496f87`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Merriweather`,
            },
            {
              family: `Open Sans`,
              variants: [`400`, `700`]
            },
          ],
        }
      },
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-1242921-6",
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: false,
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 0,
          },
        }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
