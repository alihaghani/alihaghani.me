import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/Home'

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <Layout shouldRenderTitle={false}>
      <SEO title="Home" description={site.siteMetadata.description} />
      <Home
        name={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
    </Layout>
  );
}

export default IndexPage
