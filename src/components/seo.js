/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import defaultImage from '../images/marshall_beach.jpg'
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  description,
  isBlogPost,
  image,
  lang,
  meta,
  postData,
  title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = (isBlogPost && postData.markdownRemark.excerpt)
    || description
    || site.siteMetadata.description

  const imageUrl = image && site.siteMetadata.siteUrl + ( image || defaultImage );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title === 'Home' ? site.siteMetadata.title : `%s – ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title === 'Home' ? site.siteMetadata.title : title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: isBlogPost ? `article` : `website`,
        },
        {
          property: `og:image`,
          content: imageUrl
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  isBlogPost: false,
  lang: `en`,
  meta: [],
  postData: {},
}

SEO.propTypes = {
  description: PropTypes.string,
  isBlogPost: PropTypes.bool,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  postData: PropTypes.object,
  title: PropTypes.string.isRequired,
}

export default SEO
