import React, { useEffect } from 'react'
import styles from './Home.module.css'
import NavBar from '../NavBar/NavBar';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '../Layout/Layout';

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
                <div className={styles.bottom} />
            </div>
        </div>
    )
}

export default Home
