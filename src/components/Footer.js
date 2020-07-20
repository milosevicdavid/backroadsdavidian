import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import SocialIcons from "../constants/social-icons"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return (
                        <Link key={index} to={item.path}>
                            {item.text}
                        </Link>
                    )
                })}
            </div>
            <div className={styles.icons}>
                {SocialIcons.map((item, index) => {
                    return (
                        <a href={item.url} key={index} rel="noreferrer">
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
            </div>
        </footer>
    )
}

export default Footer
