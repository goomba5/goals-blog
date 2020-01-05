import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark {
                    totalCount
                    edges {
                        node {
                            id
                            wordCount{
                                words
                            },
                            frontmatter {
                                date(formatString: "MMMM DD, YYYY")
                                title
                                description
              },
              rawMarkdownBody
            }
          }
        }
      }`
    )

    const [blogId, setBlogId] = useState();

    function handleclick(id) {
        setBlogId(id);
    }

    return (

        < div style={{ marginBottom: `1.45em`, marginTop: `4rem` }}>
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <Link key={node.id} to="/blogpost">
                        {node.frontmatter.title}{" "}
                        <span>
                            --- {node.frontmatter.date}
                        </span>
                        <p>Total number of words: {node.wordCount.words}</p>

                        <p>{node.frontmatter.description}</p>
                    </Link>
                ))
            }
        </div >
    )
}