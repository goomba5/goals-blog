import React, { Component } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomeBanner = () => {
    const data = useStaticQuery(graphql`
        query{
            file(relativePath: {eq:"wc2006.jpg"}){
                childImageSharp{
                    fluid {
                    ...GatsbyImageSharpFluid
            }
        }
    }
}`)

        return (
            <div>
<Img fluid={data.file.childImageSharp.fluid}/>
            </div>
        )
    }

export default HomeBanner;