import React from 'react'
import { Link } from "gatsby"
import Navigation from "../components/nav/frontPageNav"

// **TO-DO**: Remember to import the homeStyle.module.css
// stylesheet once it's complete.
// Also, remember to pass the style prop to the Nav component.

const IndexPage = () => {
  return(
    <div>
      <Navigation />
    </div>
  )
}

export default IndexPage;