import React from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../css/error.module.css"
import Banner from "../components/Banner"

const error = () => {
    return <Layout>
        <header className={styles.error}>
            <Banner title="ooops it's a dead end">
                <AniLink fade to="/" className="btn-white">back to home page</AniLink>
            </Banner>
        </header>
        </Layout>
}

export default error
