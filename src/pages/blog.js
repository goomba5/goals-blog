import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import blogStyles from "../components/blog.module.css"
import Posts, { useLatestPosts } from "../components/queries/PostsQuery"


const Blog = () => {
    const { edges } = useLatestPosts();

    const reverseEdges = () => {
        let allPosts = [];
        let edgesLength = edges.length;
        let counter = 1;

        while (counter <= edgesLength) {
            allPosts.push(edges[edgesLength - counter]);
            counter++;
        }
        return allPosts;
    }

    let posts = reverseEdges();

    return (
        <Layout>
            <h1 className={blogStyles.blog__title}>Blog Posts</h1>
            <div className={blogStyles.blog__post_container}>
                {
                    posts.map((post, index) => (
                        <Link key={index} to={post.node.fields.slug} className={blogStyles.blog__post}>
                            <h2 className={blogStyles.blog__post_title}>{post.node.frontmatter.title}</h2>{" "}
                            <h3 className={blogStyles.blog__post_date}>{post.node.frontmatter.date}</h3>
                            <p className={blogStyles.blog__post_total_words}>Total number of words: {post.node.wordCount.words}</p>

                            <p className={blogStyles.blog__post_description}>{post.node.frontmatter.description}</p>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Blog;