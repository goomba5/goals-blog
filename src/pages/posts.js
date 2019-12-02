import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
// import { rhythm } from "../components/"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div style={{ marginBottom: `1.45rem`, marginTop: `4rem` }}>
                <h1
                    css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
                >
                    Blog Posts
        </h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3
                            css={css`
                margin-bottom: 10px;
              `}
                        >
                            {node.frontmatter.title}{" "}
                            <span
                                css={css`
                  color: #bbb;
                `}
                            >
                                — {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.frontmatter.description}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
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
          excerpt
        }
      }
    }
  }
`