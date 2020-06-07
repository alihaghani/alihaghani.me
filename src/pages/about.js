import React from 'react';

import Layout from '../components/layout'
import SEO from "../components/seo"
import About from '../components/About';

const AboutPage = () =>
  (
    <Layout shouldRenderTitle shouldRenderFooter>
      <SEO title="About"/>
      <About />
    </Layout>
  )

export default AboutPage
