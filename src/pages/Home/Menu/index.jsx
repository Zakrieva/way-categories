import React from "react";
import { Link } from "react-router-dom"; // добавляем импорт
import img1 from "../../../assets/img/home/img1.jpg";
import img2 from "../../../assets/img/home/img2.png";
import Button from "../../../components/Button";
import styles from "./index.module.sass";

const Menu = () => {
  return (
    <div className="wrapper">
      <div className={styles.menu}>
        <div className={styles.menu_text}>
          <h1>Меню и аренда оборудования</h1>
          <p>
            Готовое меню и аренда оборудования. Всё для вашего праздника в одном
            месте!
          </p>
        </div>

        <div className={styles.carts}>
          {/* Карточка Меню */}
          <div className={styles.cart}>
            <img className={styles.img} src={img1} alt="Меню" />
            <div className={styles.cart_info}>
              <h3>Меню</h3>
              <p>Широкий выбор блюд для любого мероприятия</p>
              <div className={styles.button}>
                <Link to="/catalogFood">
                  <Button title="Посмотреть" />
                </Link>
              </div>
            </div>
          </div>

          {/* Карточка Аренда */}
          <div className={styles.cart}>
            <img className={styles.img} src={img2} alt="Аренда оборудования" />
            <div className={styles.cart_info}>
              <h3>Аренда оборудования</h3>
              <p>Профессиональное оборудование для кейтеринга</p>
              <div className={styles.button}>
                <Link to="/catalogDevice">
                  <Button title="Посмотреть" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
