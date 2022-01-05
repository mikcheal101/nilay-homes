import React from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './Services.module.css'

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h3>Our Services</h3>
                    <Icon name='shadow'/>
                </div>
            </div>
        </div>
    )
}

export default Services
