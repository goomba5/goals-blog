import React, { Component } from 'react';
import Layout from "../components/layout";

class About extends Component {
    render() {
        return (
            <Layout>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `4rem` }}>
                    <h1>
                        About
                </h1>
                    <p>This is a placeholder for the About page that will created for this site.</p>
                    <p>So, just hang tight. We'll get to this soon!</p>
                </div>
            </Layout>
        );
    }
}

export default About;