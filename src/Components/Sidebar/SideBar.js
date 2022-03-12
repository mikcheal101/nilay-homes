import React from 'react';
import Icon from '../Utils/Icons/Icons';
import { SidebarContainer } from './SideBarElements';
import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';
import img from '../Utils/Img/logo.jpeg'

const SideBar = ({ toggleSidebar, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={() => toggleSidebar()}>
            <div className={styles.icon} onClick={() => toggleSidebar()}>
                <Icon name='close' />
            </div>
            <div>
                <ul className={styles.navLinks}>
                    <li><Link to="/"><img src={img} alt="logo"  width="50px" /></Link></li>
                    <li onClick={() => toggleSidebar()}><Link to="/about">Who We Are</Link></li>
                    <li onClick={() => toggleSidebar()}><Link to="/services">Our Services</Link></li>
                    <li onClick={() => toggleSidebar()}><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </SidebarContainer>
    )
}




export default SideBar
