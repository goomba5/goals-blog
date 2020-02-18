import React from 'react'
import { Link } from "gatsby"
import BackGround from "gatsby-background-image"

import SEO from "../components/seo"
import layout from "../components/layout.module.css"

export const data =
  graphql`
  query{
    file(relativePath: {eq:"ouch.jpg"}){
        childImageSharp{
            fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }`

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

const IndexPage = ({ data }) => (

  <BackGround className={layout.banner} fluid={data.file.childImageSharp.fluid}>
    <div className={layout.content}>
      <h1 id={layout.contentTitle} className={layout.title}>Going For Goal</h1>
      <div className={layout.homeFlexContainer}>
        {menu.map(menuOpt => (
          <h2 className={layout.menuOptions}><Link key={menuOpt.name} to={menuOpt.path}>{menuOpt.name}</Link></h2>
        ))}
      </div>
    </div>
  </BackGround>
)

export default IndexPage;