import React from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about__img}></div>
            <div className={styles.about__text}>
                <div className={styles.text}>
                        <h3>Who We Are</h3>
                        <Icon name='shadow'/>
                        <p>Construction can be daunting, but it doesn't have to be. We are the people who will make it simple for you. 
                            A construction company that thrives on your happiness and satisfaction. For us, you walk in as a client and walk out as a friend.
                        </p>

                </div>
            </div>
        </div>
    )
}

export default About
