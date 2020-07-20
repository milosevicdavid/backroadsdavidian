import React from 'react';
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"


const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Elit unde inventore tempore sequi amet molestiae! Quam reiciendis magnam sequi exercitationem?</p>
                    <p>Elit unde inventore tempore sequi amet molestiae! Quam reiciendis magnam sequi exercitationem?</p>
                </article>
                <button type="button" className="btn-primary">read more</button>
            </div>
        </section>
    );
};

export default About;
