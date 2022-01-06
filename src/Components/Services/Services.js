import React from 'react';
import Icon from '../Utils/Icons/Icons';
import styles from './Services.module.css'
import { services } from '../../Data';

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
    return (
        <div className={styles.services} id="services">
            <div className={styles.header}>
                <div className={styles.text}>
                    <h3>Our Services</h3>
                    <Icon name='shadow'/>
                </div>
            </div>
            <div className={styles.items}>{service}</div>
            <div className={styles.contactImg} id='contact'>
                <p>Get in Touch</p>
            </div>
            <div className={styles.contact}>
                <div className={styles.contactDetails}>
                    <h3>Call Us</h3>
                    <div className={styles.phone}>
                        <Icon name='phone'/>
                        <p>+91-9447839569</p>
                    </div>
                    <div className={styles.email}>
                        <Icon name='at'/>
                        <p>info@nilayhomes.com</p>
                    </div>
                    <div className={styles.location}>
                        <Icon name='location'/>
                        <p>Address: Room No.7/144/41, 1st Floor, Pudussery Galleria, Cheroor P.O, Thrissur - 680008, Kerala, India</p>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.formHolder}>
                    <h3>Leave us a message</h3>
                        <form>
                            <input placeholder='Name'/><br/>
                            <input placeholder='Email'/><br/>
                            <input placeholder='Phone Number'/><br/>
                            <textarea placeholder='Message'/><br/>
                            <button>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.4341682498098!2d76.2192450654825!3d10.545157966301609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef4e8f57284d%3A0x49555bec8a63287c!2sNilay%20Homes!5e0!3m2!1sen!2sng!4v1641465960893!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title="address"></iframe>
            </div>
            <div className={styles.footer}>

            </div>
        </div>
    )
}

export default Services
