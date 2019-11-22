import React, { Component } from 'react';
import Layout from "../components/layout"

class Posts extends Component {
    render() {
        return (
            <Layout>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `4rem` }}>
                    <h1>This will be the posts page!</h1>
                    <p>This page will have a Material UI grid that displays posts as items using specific breakpoints.</p>
                    <p>Hooray responsiveness!</p>
                </div>
            </Layout>
        );
    }
}

export default Posts;