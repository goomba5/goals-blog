import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const LatestPost = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div>
            <h1>Latest Post</h1>
        </div>
    )
}

export default LatestPost;