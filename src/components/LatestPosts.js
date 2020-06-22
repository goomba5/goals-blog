import React from "react"
import { useLatestPosts } from "../components/queries/PostsQuery"
import { Link } from "gatsby"

const LatestPosts = () => {
    let { edges } = useLatestPosts();

    const reverseEdges = () => {
        let latestPosts = [];
        let edgesLength = edges.length;
        let postLimit = 4;
        let counter = 1;

        while (counter < postLimit) {
            latestPosts.push(edges[edgesLength - counter]);
            counter++;
        }
        return latestPosts;
    }

    const latestPostList = reverseEdges();

    return (
        <div className="homepage__latest-posts-container">
            <div className="homepage__latest-posts">
                {latestPostList.map((post, index) => {
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