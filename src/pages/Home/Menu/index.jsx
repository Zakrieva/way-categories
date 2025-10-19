import React from "react";
import img1 from "../../../assets/img/home/img1.jpg";
import img2 from "../../../assets/img/home/img2.png";
import styles from "./index.module.sass";
import Button from "../../../components/Button";
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
          <div className={styles.cart}>
            <img className={styles.img} src={img1} alt="" />
            <div className={styles.cart_info}>
              <h3>Меню</h3>
              <p>Широкий выбор блюд для любого мероприятия</p>
              <div className={styles.button}>
                <Button title="Посмотреть" />
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <img className={styles.img} src={img2} alt="" />
            <div className={styles.cart_info}>
              <h3>Аренда оборудования</h3>
              <p>Профессиональное оборудование для кейтеринга</p>
              <div className={styles.button}>
                <Button title="Посмотреть" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
