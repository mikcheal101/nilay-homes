import React from 'react';
import Icon from '../Utils/Icons/Icons';
import { SidebarContainer } from './SideBarElements';
import styles from './SideBar.module.css';
import img from '../Utils/Img/logo.jpeg'

const SideBar = ({ toggleSidebar, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={() => toggleSidebar()}>
            <div className={styles.icon} onClick={() => toggleSidebar()}>
                <Icon name='close' />
            </div>
            <div>
                <ul className={styles.navLinks}>
                    <li><a href="#home"><img src={img} alt='logo' width='50px' /></a></li>
                    <li onClick={() => toggleSidebar()}><a href="#about">Who We Are</a></li>
                    <li onClick={() => toggleSidebar()}><a href="#services">Our Services</a></li>
                    <li onClick={() => toggleSidebar()}><a href="#about">Our Projects</a></li>
                    <li onClick={() => toggleSidebar()}><a className={''} href="#contact">Contact Us</a></li>
                </ul>
            </div>
            {/* <ListItems /> */}
        </SidebarContainer>
    )
}




export default SideBar
