module.exports = {
  siteMetadata: {
    title: 'React+Design',
    description: 'All aboyt React and design',
    keywords: 'react, design, graphql'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'lgomd09df5ux',
        accessToken: '30d37d06d0b197e854a89fa313ba503cbe56d0aca8b2fdd0d587054eb1366cc9'
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
      
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
