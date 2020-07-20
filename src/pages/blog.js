import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout";

const blog = () => {
  return (  <div>
      <h1>Blog page</h1>
      <Layout>
          <Link to="/">Back to homepage</Link>
      </Layout>
    </div>
  )
}

export default blog
