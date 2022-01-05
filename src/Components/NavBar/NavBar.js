import React from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './Navbar.module.css'

const NavBar = ({toggleSidebar}) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div><Icon name='logo' /></div>
                <div className={styles.hamburger} onClick={toggleSidebar}>
                    <Icon name='hamburger' />
                </div>
            </div>
        </div>
    )
}

export default NavBar
