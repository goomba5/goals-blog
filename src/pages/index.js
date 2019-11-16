import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Test from "../components/test"
// import NewHeader from "../components/NewHeader"
import HomeBanner from "../components/HomeBanner"

const IndexPage = () => (
  <Layout>
    {/* <NewHeader /> */}
    <SEO title="Home" />
    <p>I don't have any posts here yet, but I will be adding stuff soon</p>
    <p>We're gonna have some fun. All right - let's go!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <HomeBanner />
      <Image />
      <Test />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
