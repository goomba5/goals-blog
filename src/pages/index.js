import React from 'react'
import { Link } from "gatsby"
import BackGround from "gatsby-background-image"

import SEO from "../components/seo"
import "../../src/index.css"
import Footer from '../components/footer/Footer';
import Header from "../components/Header"
import LatestPosts from "../components/LatestPosts"

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

const IndexPage = () => (
  <div className="home-page">
    <Header />
    <div className="home-page__middle-section">
      <LatestPosts />
      <h2 className="homepage__latest-posts-subtitle">Latest Posts</h2>
      <p className="homepage__self-description">My name is Gary and I am junior web developer focused on building accessible websites using JavaScript and React!</p>
    </div>
    <Footer />
  </div>
)

export default IndexPage;