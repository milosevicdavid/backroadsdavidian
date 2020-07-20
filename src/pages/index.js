import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const IndexPage = () => (
    <main>
        <Layout>
            <SimpleHero>
                <Banner
                    title="continue exploring"
                    info="
                Amet perspiciatis incidunt ipsa commodi velit. Repudiandae voluptates at nisi.
                    "
                >
                    <Link to="/tours" className="btn-white">
                        explore tours
                    </Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
    </main>
)

export default IndexPage
