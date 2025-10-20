import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import styles from "./index.module.sass";

const Header = () => {
  const location = useLocation();

  return (
    <header className="wrapper">
      <div className={styles.header}>
        <Link to="/">
          <img src={logo} alt="Логотип" className={styles.logo} />
        </Link>

        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.link} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            Главная
          </Link>
          <Link
            to="/catalogFood"
            className={`${styles.link} ${
              location.pathname === "/catalogFood" ? styles.active : ""
            }`}
          >
            Меню
          </Link>
          <Link
            to="/catalogDevice"
            className={`${styles.link} ${
              location.pathname === "/catalogDevice" ? styles.active : ""
            }`}
          >
            Аренда
          </Link>
          <Link
            to="/contacts"
            className={`${styles.link} ${
              location.pathname === "/contacts" ? styles.active : ""
            }`}
          >
            Контакты
          </Link>
        </nav>

        <button className={styles.button}>Связаться</button>
      </div>
    </header>
  );
};

export default Header;
