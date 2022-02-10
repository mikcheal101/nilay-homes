import React, { useEffect } from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './About.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to("#text1", {
            x: -30,
            opacity: 0.9,
            duration: 2,
            scrollTrigger: {
                trigger: "#text1",
                toggleActions: "play complete reverse reset",
            }
        })
    }, []);
    return (
        <div className={styles.about} id="about">
            <div className={styles.about__img}></div>
            <div className={styles.about__text}>
                <div className={styles.text} id='text1'>
                    <h3>Who We Are</h3>
                    <Icon name='shadow' />
                    <p>Construction can be daunting, but it doesn't have to be. We are the people who will make it simple for you.
                        A construction company that thrives on your happiness and satisfaction. For us, you walk in as a client and walk out as a friend.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About
