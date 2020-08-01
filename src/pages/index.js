import React from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => (
    <main>
        <Layout>
            <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
                <Banner
                    title="continue exploring"
                    info="
                    Amet perspiciatis incidunt ipsa commodi velit. Repudiandae voluptates at nisi.
                    "
                >
                    <AniLink fade to="/tours" className="btn-white">
                        explore tours
                    </AniLink>
                </Banner>
            </StyledHero>
            <About/>
            <Services/>
        </Layout>
    </main>
)

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
