import React from "react";
import styles from "./index.module.sass";
import logo from "../../assets/svg/whiteLogo.svg";
import insta from "../../assets/svg/instaLogo.svg";
import telegram from "../../assets/svg/tgLogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.top}>
          <img src={logo} alt="WayCatering" className={styles.logo} />
        </div>

        <div className={styles.bottom}>
          <div className={styles.socials + " " + styles.mobile}>
            <a href="#" className={styles.icon}>
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#" className={styles.icon}>
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
          <div className={styles.left}>
            <p>WAYCATERING © 2024</p>
            <a href="#">МЕНЮ</a>
            <a href="#">АРЕНДА</a>
            <a href="#">О НАС</a>
          </div>

          <div className={styles.socials + " " + styles.desctop}>
            <a href="#" className={styles.icon}>
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#" className={styles.icon}>
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
