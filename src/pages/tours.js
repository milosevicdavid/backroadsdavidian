import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/RegularHeader"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"

const tours = ({data}) => {
    return (
        <>
            <Layout>
                <StyledHero img={data.defaultBcg.childImageSharp.fluid} /> 
                <Tours />
            </Layout>
        </>
    )
}


export const query = graphql`
    query {
        defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default tours
