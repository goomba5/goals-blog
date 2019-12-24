import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import PostsGrid from "../components/postsGrid"

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
                <PostsGrid />
            </div>
        </Layout>
    )
}