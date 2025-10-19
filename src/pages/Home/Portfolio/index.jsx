import React from "react";
import Button from "../../../components/Button";
import img1 from "../../../assets/img/home/img4.jpg";
import img2 from "../../../assets/img/home/img5.jpg";
import styles from "./index.module.sass";
import vectorLeft from "../../../assets/svg/VectorLeft.svg";
import vectorRight from "../../../assets/svg/VectorRight.svg";
const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className={styles.portfolio}>
        <div className={styles.title}>
          <h1>Наше портфолио</h1>
          <div className={styles.buts}>
            <div className={styles.btn}>
              <Button title={<img src={vectorLeft} alt="" />} />
            </div>
            <div className={styles.btn}>
              <Button title={<img src={vectorRight} alt="" />} />
            </div>
          </div>
        </div>

        <div className={styles.carts}>
          <div className={styles.cart}>
            <img className={styles.img} src={img1} alt="" />
            <div className={styles.cart_info}>
              <h3>Музыкальный фестиваль «Песня года»</h3>

              <div className={styles.button}>
                <Button title="Посмотреть" />
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <img className={styles.img} src={img2} alt="" />
            <div className={styles.cart_info}>
              <h3>Открытие автосалона китайских производителей</h3>
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

export default Portfolio;
