import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark {
                    totalCount
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                date(fromNow: true)
                                description
              }
            }
          }
        }
      }`
    )
    return (

        < div style={{ marginBottom: `1.45em`, marginTop: `4rem` }}>
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        {node.frontmatter.title}{" "}
                        <span>
                            — {node.frontmatter.date}
                        </span>
                        <p>{node.frontmatter.description}</p>
                    </div>
                ))
            }
        </div >
    )
}