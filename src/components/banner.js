import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Img from "gatsby-image"

const Banner = (props) => (
  <div>
    <Img fluid={bannerImage.fluid} />
  </div>
)

export default Banner