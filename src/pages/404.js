import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"

const error = () => {
    return <Layout>
        <header className={styles.error}>
            <Banner title="ooops it's a dead end">
                <Link to="/" className="btn-white">back to home page</Link>
            </Banner>
        </header>
        </Layout>
}

export default error
