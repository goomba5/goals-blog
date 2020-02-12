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
                    <h2 className={about.title}>What It Do</h2>
                    <p>
                        Yo! If you are reading this, then congratulations on finding my site - it's not out in the open, that's for sure. With that being said, my name is Gary and I made this site using Gatsby and Netlify CMS.
            </p>
                    <p>
                        This blog site was made for one purpose and one purpose only: I want to practice. This is a good place to continue sharpening my skills with JavaScript, HTML/CSS and React, as well as the opportunity to write about those experiences. The takeaway from this is to describe an experience, analyze it, and then reflect. Hopefully all of that sounds okay.
            </p>
                </div>

                <div className={about.flexItem}>
                    <h2 className={about.title}>Where I've Been</h2>
                    <p>
                        Prior to where I currently work, I was able to work in a number of different roles with varying degrees of responsibilities. I've worked in retail logistics, as a backline cook for a local restaurant, a sales associate and store manager, as well as a service coordinator overseeing technicians who fixed high-end dental equipment. My path has zigged and zagged and culminated in where I am and where I want to go.
            </p>
                </div>

                <div className={about.flexItem}>
                    <h2 className={about.title}>Where I'm Going</h2>
                    <p>
                        For the past three years, I have been on a journey to completely reset my career from customer service to software development. This path has required a lot of time, practice, patience, and persistence. The journey has had its low points, but I can say with absolute confidence that it has been more than rewarding.
            </p>
                    <p>
                        The people I work with are the best group of coworkers and friends you can find. Truthfully, I want to stay here and grow among them.
            </p>
                </div>
            </div>
            <Img className={about.image} alt="Dotloop ZG18 Group Picture" fluid={data.file.childImageSharp.fluid} />
        </Layout >
    );
}

export default About;