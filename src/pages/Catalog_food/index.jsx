import React from "react";
import styles from "./index.module.sass";
import logo from "../../assets/svg/logo.svg";

const Catalog_food = () => {
  return (
    <div>
      <div class={styles.about}>
        <div class={styles.about__bg}></div>

        <div class={styles.about__card}>
          <img src={logo} alt="WayCatering" class="about__logo" />
          <p>
            Наша компания специализируется на предоставлении кейтеринг услуг для
            мероприятий любого масштаба и типа. Мы предлагаем широкий выбор
            меню, включая: основные блюда, закуски, десерты и напитки, которые
            гарантированно порадуют гостей и создадут уютную атмосферу
            праздника. Здесь представлено основное меню для кейтеринга, но также
            по дополнительному запросу, можем выслать меню ресторана и столовой
            для премиальных и бюджетных выездных обедов и ужинов.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catalog_food;
