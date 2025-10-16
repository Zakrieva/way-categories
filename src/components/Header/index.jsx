import React from "react";
import logo from "../../assets/svg/logo.svg";
import styles from "./index.module.sass";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
        <div className={styles.nav}>
          <p style={{ color: "#E6007E" }}>Главная</p>
          <p>Меню</p>
          <p>Аренда</p>
          <p>Контакты</p>
        </div>
        <button className={styles.button}>Связаться</button>
      </div>
    </div>
  );
};

export default Header;
