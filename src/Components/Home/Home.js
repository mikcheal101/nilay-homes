import React from 'react'
import styles from './Home.module.css'
import image from '../../Components/Utils/Img/house.png'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <div className={styles.home__text}>
                    <p>The Power of Design to make a better world</p>
                </div>
                <div className={styles.home__img}>
                    {/* <img src={image} alt='A house' width="818px"/> */}
                </div>
            </div>
        </div>
    )
}

export default Home
