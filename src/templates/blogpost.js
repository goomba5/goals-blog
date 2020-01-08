import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <div style={{ marginBottom: `1.45em`, marginTop: `4rem` }}>
                <h1>
                    {post.frontmatter.title}
                </h1>

                <h2>
                    {post.frontmatter.description}
                </h2>

                <h3>
                    {post.frontmatter.date}
                </h3>

                <h4>
                    Word count: {post.wordCount.words}
                </h4>

                <p>
                    {post.rawMarkdownBody}
                </p>
            </div>
        </Layout>
    )
}

export const query =
    graphql`
        query($slug: String!){
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