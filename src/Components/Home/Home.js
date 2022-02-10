import React, { useEffect } from 'react'
import styles from './Home.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Home = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to("#text", {
            x: 20,
            opacity: 0.9,
            duration: 2,
            scrollTrigger: {
                trigger: "#text",
                toggleActions: "play complete reverse reset",
            }
        })
    }, []);
    return (
        <div className={styles.home} id="home">
            <div className={styles.home__container}>
                <div className={styles.home__text}>
                    <p id="text">The Power of Design to make a better world</p>
                </div>
                <div className={styles.home__img}>
                </div>
            </div>
        </div>
    )
}

export default Home
