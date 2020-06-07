import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/Home'

const IndexPage = () =>
  (
    <Layout shouldRenderTitle={false}>
      <SEO title="Home"/>
      <Home
        name="Ali Haghani"
        description="Enthusiast, software engineer, and entrepreneur. Currently at Twitter in San Francisco."
      />
    </Layout>
  )

export default IndexPage
