import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export const data =
    graphql`
        query {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        id
                        fields{
                            slug
                        }
                        wordCount{
                            words
                        }
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            title
                            description
          }
          rawMarkdownBody
          id
        }
      }
    }
  }`

const Blog = ({ data }) => (
    <Layout>
        <div style={{ marginBottom: `1.45em`, marginTop: `4rem` }}>
            <h1>Blog Posts</h1>
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <Link key={node.id} to={node.fields.slug}>
                        {node.frontmatter.title}{" "}
                        <span>
                            --- {node.frontmatter.date}
                        </span>
                        <p>Total number of words: {node.wordCount.words}</p>

                        <p>{node.frontmatter.description}</p>
                    </Link>
                ))
            }
        </div>
    </Layout>
)

export default Blog;