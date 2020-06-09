import React from 'react'
import { Link } from "gatsby"
import BackGround from "gatsby-background-image"

import SEO from "../components/seo"
import "../../src/index.css"
import Footer from '../components/footer/Footer';

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

const IndexPage = () => (
  <div className="home-page">
    <h1 className="home-page__title">Going For Goal</h1>
    <div className="home-page__menu-flex-container">
      {menu.map(option => (
        <h2 className="home-page__menu-options"><Link key={option.name} to={option.path}>{option.name}</Link></h2>
      ))}
    </div>
    <Footer />
  </div>
)

export default IndexPage;