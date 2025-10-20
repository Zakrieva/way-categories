import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./index.module.sass";

const SwiperAbout = ({ img1, img2, img3 }) => {
  return (
    <div className={styles.wrapp}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Navigation]}
        navigation
        pagination={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={20}
        rewind={true}
        watchSlidesProgress={true}
        initialSlide={1}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            centeredSlides: false,
          },
          620: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide className={styles.slide}>
          <img src={img1} alt="Кейтеринг" className={styles.img} />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={img2} alt="Кейтеринг" className={styles.img} />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={img3} alt="Кейтеринг" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src={img1} alt="Кейтеринг" className={styles.img} />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={img2} alt="Кейтеринг" className={styles.img} />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={img3} alt="Кейтеринг" className={styles.img} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperAbout;
