import React from "react";
import styles from "./index.module.sass";

const About = () => {
  return (
    <div className={styles.about}>
      <img src="" alt="" />{" "}
      <div className={styles.title}>
        <h1>WayCatering: Вкус и стиль для любого события!</h1>
        <p>
          Наша команда опытных поваров и официантов обеспечит профессиональное
          обслуживание, а также поможет подобрать индивидуальное меню и
          концепцию кейтеринга для вашего мероприятия. Мы стремимся к тому,
          чтобы каждое событие, на котором мы оказываем свои услуги, было
          запоминающимся и безупречным для всех его участников. 
        </p>
      </div>
    </div>
  );
};

export default About;
