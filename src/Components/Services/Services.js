import React, {useEffect, useState} from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './Services.module.css'
import { services, servicesFilter } from '../../Data';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const service = services.map((item, i) => {
    return (
        <div key={i} className={styles.item} style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover'}}>
            <div className={styles.item__text}>
                <h6>{item.title}</h6>
                <p>{item.text}</p>
            </div>
            {/* <img src={item.image} /> */}
        </div>
    )
})

const Services = () => {
    const [activeTab, setActiveTab] = useState(1);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // setActiveTab("All");
        gsap.to("#text2", {
            x: 50,
            opacity: 0.9,
            duration: 2,
            scrollTrigger: {
                trigger: "#text2",
            }
        })
        gsap.to("#text3", {
            y: 15,
            opacity: 0.9,
            duration: 2,
            scrollTrigger: {
                trigger: "#text3",
            }
        })
    }, []);

    const filter = servicesFilter.map((item, i) => {
        return (
            <div onClick={() => handleSetActiveTab(item.id)} key={item.id}>
                <span className={activeTab === item.id ? styles.active : ""}>
                    {item.name}
                </span>
            </div>
        )
    })

    const handleSetActiveTab = (id) => {
        setActiveTab(id)
    }
    return (
        <div className={styles.services} id="services">
            <div className={styles.header}>
                <div className={styles.text}>
                    <h3>Our Services</h3>
                    <Icon name='shadow'/>
                </div>
            </div>
            <div className={styles.filter}>
                {filter}
            </div>
            <div className={styles.items}>{service}</div>
            <section className={styles.footer} />
        </div>
    )
}

export default Services
