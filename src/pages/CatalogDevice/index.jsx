import React from "react";
import styles from "./index.module.sass";
import logo from "../../assets/svg/logo.svg";
import SwiperAbout from "../../components/SwiperAbout";
import Catalog from "../../components/Catalog";
import data from "../../assets/data/dataDevice";
import img1 from "../../assets/img/catalogDevice/swiper1.jpg";
import img2 from "../../assets/img/catalogDevice/swiper2.jpg";
import img3 from "../../assets/img/catalogDevice/swiper3.jpg";

const CatalogDevice = () => {
  return (
    <div>
      <div class={styles.about}>
        <div class={styles.about__bg}></div>

        <div class={styles.about__card}>
          <img src={logo} alt="WayCatering" class="about__logo" />
          <p>
            Мы предоставляем в аренду все необходимое оборудование для
            кейтеринга, а наш ассортимент постоянно пополняется. Кроме того, мы
            сотрудничаем с различными компаниями, специализирующимися на
            организации мероприятий. Если вам нужен ведущий, шатры или
            праздничное оформление на вашем мероприятии, мы поможем найти
            подходящих специалистов. 
          </p>
        </div>
      </div>
      <SwiperAbout img1={img1} img2={img2} img3={img3} />
      <Catalog data={data} />
    </div>
  );
};

export default CatalogDevice;
