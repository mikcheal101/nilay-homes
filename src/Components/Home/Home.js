import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home} id="home">
            <div className={styles.home__container}>
                <div className={styles.home__text}>
                    <p>The Power of Design to make a better world</p>
                </div>
                <div className={styles.home__img}>
                </div>
            </div>
        </div>
    )
}

export default Home
