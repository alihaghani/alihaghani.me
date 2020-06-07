/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from'./Header.jsx';
import Footer from './Footer';
// import "./layout.css"

const Layout = ({ children, shouldRenderTitle, shouldRenderFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        shouldRenderTitle={shouldRenderTitle}
      />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {shouldRenderFooter && <Footer />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  shouldRenderFooter: PropTypes.bool,
  shouldRenderTitle: PropTypes.bool,
}

export default Layout
