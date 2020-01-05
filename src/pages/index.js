import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Test from "../components/test"
import HomeBanner from "../components/HomeBanner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `4rem` }}>
      <HomeBanner />
      <p>I don't have any posts here yet, but I will be adding stuff soon</p>
      <p>We're gonna have some fun.</p>
      <Test />
    </div>
  </Layout>
)

export default IndexPage
