import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import flex from "../components/blog.module.css"

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
        <h1>Blog Posts</h1>
        <div className={flex.flexContainer}>
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <Link key={node.id} to={node.fields.slug} className={flex.flexItem}>
                        <h2>{node.frontmatter.title}</h2>{" "}
                        <h3>{node.frontmatter.date}</h3>
                        <p>Total number of words: {node.wordCount.words}</p>

                        <p>{node.frontmatter.description}</p>
                    </Link>
                ))
            }
        </div>
    </Layout>
)

export default Blog;