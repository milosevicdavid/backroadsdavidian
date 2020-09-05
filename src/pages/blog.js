import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/images"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from '../components/Blog/BlogList'

const blog = ({data}) => {

    return (
        <div>
            <Layout>
                <StyledHero img={data.blogBcg.childImageSharp.fluid}/>
                <BlogList />
            </Layout>
        </div>
    )
}

export const query = graphql`
    query {
        blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

export default blog
