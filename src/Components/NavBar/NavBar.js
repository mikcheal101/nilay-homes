import React, {useState, useEffect} from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const navData = [
    {id: 1, name: "Home", link: "/"},
    {id: 2, name: "Who we are", link: "/about"},
    {id: 3, name: "Our services", link: "/services"},
    {id: 4, name: "Contact us", link: "/contact"},
]
const NavBar = ({toggleSidebar}) => {
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive("Home")
    }, [])

    const navLists = navData.map((item) => {
        return (
            <div key={item.id}>
                 <ul className={styles.nav}>
                    <li onClick={() => handleChangeTab(item.name)}>
                        <Link to={item.link} className={active === item.name ? styles.active : styles.navLists}>{item.name}</Link>
                    </li>
                </ul>
            </div>
        )
    })

    const handleChangeTab = (tabString) => {
        setActive(tabString);
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.logo}><Link to="/"><Icon name='logo' /></Link></div>
                <div className={styles.navItemsContainer}>
                <div className={styles.hamburger} onClick={toggleSidebar}><Icon name='hamburger'/></div>
                    <div className={styles.navItems}>
                        {navLists}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar
