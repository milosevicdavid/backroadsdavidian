import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
    query {
        posts: allContentfulPost(sort: { fields: published, order: DESC }) {
            edges {
                node {
                    published(formatString: "D MM Y")
                    createdAt(formatString: "LLLL")
                    title
                    slug
                    id: contentful_id
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)
    return (
        <section className={styles.blog}>
            <Title title="my" subtitle="blog" />
            <div className={styles.center}>
                {posts.edges.map(({node}) =>  <BlogCard key={node.id} blog={node} />
                    
                
                )}
            </div>
        </section>
                
    ) 
}

export default BlogList
