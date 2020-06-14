import React from "react"
import { useLatestPosts } from "../components/queries/LatestPostsQuery"
import { Link } from "gatsby"

const LatestPosts = () => {
    const { edges } = useLatestPosts();

    return (
        <div className="homepage__latest-posts-container">
            <div className="homepage__latest-posts">
                {edges.map(post => {
                    return <div className="homepage__post" key={post.node.id}>
                        <Link to={post.node.fields.slug}>
                            <h3 className="homepage__post-title">{post.node.frontmatter.title}</h3>
                            <p className="homepage__post-description">{post.node.frontmatter.description}</p>
                            <p className="homepage__post-date">{post.node.frontmatter.date}</p>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default LatestPosts;