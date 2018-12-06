import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLInk(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
           }
         }
       }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
          {children}
          <Footer data={data}>
            Backgrounds made in Cinema 4D, iOS app in Swift, 
            site in React. <a href="mailto:contact@glebicki.co">Email us</a> to ask anything. 
            © 2018 - Terms of Service - Privacy Policy
          </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
