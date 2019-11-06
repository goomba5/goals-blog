import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Test from "../components/test"
import NewHeader from "../components/NewHeader"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi mom</h1>
    <p>I don't have any posts here yet, but I will be adding stuff soon</p>
    <p>We're gonna have some fun. Let's go!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Test />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
