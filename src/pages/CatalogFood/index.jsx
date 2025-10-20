import React from "react";
import styles from "./index.module.sass";
import logo from "../../assets/svg/logo.svg";
import SwiperAbout from "../../components/SwiperAbout";
import Catalog from "../../components/Catalog";
import data from "../../assets/data/dataFood";
import img1 from "../../assets/img/catalogFood/swiper1.jpg";
import img2 from "../../assets/img/catalogFood/swiper2.jpg";
import img3 from "../../assets/img/catalogFood/swiper3.jpg";

const CatalogFood = () => {
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
      <SwiperAbout img1={img1} img2={img2} img3={img3} />
      <Catalog data={data} />
    </div>
  );
};

export default CatalogFood;
