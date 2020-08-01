import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
    query Headerquery {
        site {
            siteMetadata {
                title
                description
                author
                data {
                    age
                }
            }
        }
    }
`

const Header = () => {
    const { site } = useStaticQuery(getSiteData)
    console.log(site)
    return (
        <div>
            <h1>title: {site.siteMetadata.title}</h1>
            <h1>author: {site.siteMetadata.author}</h1>
        </div>
    )
}

export default Header
