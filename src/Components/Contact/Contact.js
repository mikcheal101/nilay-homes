import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import Icon from "../Utils/Icons/Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#text2", {
      x: 70,
      opacity: 0.9,
      duration: 2,
      scrollTrigger: {
        trigger: "#text2",
      },
    });
    gsap.to("#text3", {
      y: 15,
      // opacity: 0.9,
      duration: 2,
      scrollTrigger: {
        trigger: "#text3",
      },
    });
  }, []);
  return (
    <div>
      <div className={styles.contactImg} id="contact">
        <p>Get in Touch</p>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactDetails} id="text2">
          <h3>Call Us</h3>
          <div className={styles.phone}>
            <Icon name="phone" />
            <p>+905323556508</p>
          </div>
          <div className={styles.email}>
            <Icon name="at" />
            <p>info@nilayinteriorhomes.com</p>
          </div>
          <div className={styles.location}>
            <Icon name="location" />
            <p>
              Bahçeşehir 2. Kısım Mh. Şehit Ast Furkan Işik Blv. Tual Bahçekent
              Çarşı. Dükkan A30. Istanbul
            </p>
          </div>
        </div>
        <div className={styles.form} id="text3">
          <div className={styles.formHolder}>
            <h3>Leave us a message</h3>
            <form>
              <input placeholder="Name" />
              <br />
              <input placeholder="Email" />
              <br />
              <input placeholder="Phone Number" />
              <br />
              <textarea placeholder="Message" />
              <br />
              <button>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.4341682498098!2d76.2192450654825!3d10.545157966301609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef4e8f57284d%3A0x49555bec8a63287c!2sNilay%20Homes!5e0!3m2!1sen!2sng!4v1641465960893!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="address"
        ></iframe> */}

        {/* <div style="width: 100%"> */}
    
        {/* </div> */}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Contact;
