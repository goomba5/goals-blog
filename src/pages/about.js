import React from 'react';
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout";
import about from "../components/about.module.css"

export const data =
    graphql`
        query{
            file(relativePath: {eq:"18ZG_Thurs-029.jpg"}){
                childImageSharp{
                    fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`

const About = ({ data }) => {

    return (
        <Layout>
            <div className={about.flexContainer}>
                <div className={about.flexItem}>
                    <h2 className={about.title}>Who I Am</h2>
                    <p>
                        Yo! My name is Gary and I am an aspiring web developer. For the past couple of years, I have been on a winding journey to learn as much as possible about all of the tools of the trade, and to collect as many experiences as possible. This path has required a lot of time, practice, patience, and, most importantly, persistence. At the core of each experience - especially those in the future - there are two things I always make sure of, and those are to have fun and enjoy yourself.
            </p>
                </div>

                <div className={about.flexItem}>
                    <h2 className={about.title}>Where I've Been</h2>
                    <p>
                        My name is Gary and I have been a part of Zillow Group for over four years. Prior to my current job, I have been: a logistics team member for a major retailer, a
            </p>
                </div>

                <div className={about.flexItem}>
                    <h2 className={about.title}>Where I'm Going</h2>
                    <p>
                        My name is Gary and I have been a part of Zillow Group for over four years. Prior to my current job, I have been: a logistics team member for a major retailer, a
            </p>
                </div>
            </div>
            <Img className={about.image} alt="Dotloop ZG18 Group Picture" fluid={data.file.childImageSharp.fluid} />
        </Layout >
    );
}

export default About;