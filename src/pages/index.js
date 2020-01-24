import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Test from "../components/test"
import HomeBanner from "../components/HomeBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <HomeBanner />
      <p>I don't have any posts here yet, but I will be adding stuff soon</p>
      <p>We're gonna have some fun.</p>
      <Test />
    </div>
  </Layout>
)

export default IndexPage
