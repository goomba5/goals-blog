import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    console.log(post)
    return (
        <Layout>
            <div style={{ marginBottom: `1.45em`, marginTop: `4rem` }}>
                <h1>
                    {post.frontmatter.title}
                </h1>

                <h2>
                    {post.frontmatter.description}
                </h2>

                <h2>
                    {post.frontmatter.date}
                </h2>

                <p>
                    {post.rawMarkdownBody}
                </p>
            </div>
        </Layout>
    )
}

export const query =
    graphql`
        query BlogPost($slug: String!){
            markdownRemark(fields: { slug: { eq: $slug } }) {
                    id
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      description
                      title
                    }
                    rawMarkdownBody
                    wordCount {
                      words
                    }
                }
                }`

export default BlogPost;