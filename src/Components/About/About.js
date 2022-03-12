import React, { useEffect } from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './About.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '../Layout/Layout';
import img from "../Utils/Img/aboutimg.png"
import img2 from "../Utils/Img/infoimg.png"

const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to("#text1", {
            x: 20,
            opacity: 0.9,
            duration: 4,
            scrollTrigger: {
                trigger: "#text1",
                toggleActions: "play complete reverse reset",
            }
        })
        gsap.to("#img", {
            x: -20,
            opacity: 0.9,
            duration: 4,
            scrollTrigger: {
                trigger: "#img",
                toggleActions: "play complete reverse reset",
            }
        })
        gsap.to("#h2", {
            x: 60,
            opacity: 0.9,
            duration: 4,
            scrollTrigger: {
                trigger: "#h2",
                // toggleActions: "play complete reverse reset",
            }
        })
        gsap.to("#image", {
            y: -30,
            opacity: 0.9,
            duration: 3,
            scrollTrigger: {
                trigger: "#image",
                toggleActions: "play complete reverse reset",
            }
        })
    }, []);
    return (
        <div className={styles.container} id="about">
            <section className={styles.about}>
                <div className={styles.about__text}>
                    <div className={styles.text} id='text1'>
                        <h3>About Us</h3>
                        <p>Designer services are no longer a luxury</p>
                        {/* <Icon name='shadow' /> */}
                        <p>Since our humble beginnings in 2006, We has significantly expanded its collection of exclusive lamps.
                            Today we are proud to present you our best lighting design solutions. Our collection is updated every day
                            with beautiful solutions and we are glad that you, our customers, support us on way! Since our humble beginnings in 2006,
                            We has significantly expanded its collection of exclusive lamps. Today we are proud to present you our best lighting design solutions.
                            Our collection is updated every day with beautiful solutions and we are glad that you, our customers, support us on way!Our collection is updated every day with beautiful solutions. <br /> <br /> Aenean commodo elit erat, vel hendrerit lacus euismod vel.
                            Maecenas sodales pretium felis, quis rutrum est pellentesque
                        </p>
                    </div>
                </div>
                <div className={styles.about__img}>
                    <img src={img} alt="" width="100%" id="img" />
                </div>
            </section>

            <section className={styles.serviceInfo}>
                <div className={styles.infoLeft}>
                    <h2 id="h2">Designer services are no longer a luxury</h2>
                    <div id="image" className={styles.img}>
                        <img src={img2} alt="" />
                        <p>Founder</p>
                        <h3>Joe Anderson</h3>
                    </div>
                </div>
                <div className={styles.infoRight}>
                    <div className={styles.infotext}>
                        <p>
                            Since our humble beginnings in 2006, We has significantly expanded its collection of exclusive lamps. Today we are proud to present you our best
                            lighting design solutions. Our collection is updated every day with beautiful solutions and we are glad that you,
                            our customers, support us on way! Since our humble beginnings in 2006,
                            We has significantly expanded its collection of exclusive lamps.
                            Today we are proud to present you our best lighting design solutions. Our collection is updated every day with beautiful
                            solutions and we are glad that you, our customers, support us on way!
                        </p>
                        <p>
                            Our collection is updated every day with beautiful solutions. Aenean commodo elit erat, vel hendrerit lacus euismod vel.
                            Maecenas sodales pretium felis, quis rutrum est pellentesque

                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.footer}>

            </section>
        </div>
    )
}

export default About
