import React from "react";
import s from "./index.module.sass";
import ContactForm from "../../components/ContactForm";
import img from "../../assets/img/imgContactPage.png";
const Contacts = () => {
  return (
    <section className={s.contacts}>
      <div className="wrapper">
        <h2 className={s.subtitle}>Контакты</h2>
        <h1 className={s.title}>Свяжитесь с WayCatering</h1>
        <p className={s.text}>
          Вы можете написать нам в удобном мессенджере, позвонить или оставить
          заявку через форму — мы ответим в рабочее время в ближайшие часы.
        </p>

        <div className={s.grid}>
          <div className={s.card}>
            <h3 className={s.cardTitle}>Реквизиты</h3>
            <ul className={s.list}>
              <li>
                <span>ИП</span>
                <span>Магомадов Адам Увайсович</span>
              </li>
              <li>
                <span>ИНН</span>
                <span>201405745200</span>
              </li>
              <li>
                <span>ОГРНИП</span>
                <span>321200000030880</span>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:shantilakes@gmail.com">shantilakes@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className={s.card}>
            <h3 className={s.cardTitle}>Быстрые контакты</h3>
            <p className={s.note}>
              Позвоните или напишите — мы обсудим задачу и предложим варианты
              под ваш бюджет и формат события.
            </p>
            <ul className={s.list}>
              <li>
                <span>Телефон</span>
                <a href="tel:+79899299874">+7 989 929 98 74</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:shantilakes@gmail.com">shantilakes@gmail.com</a>
              </li>
              <li>
                <span>Контактное лицо</span>
                <span>Хасуев Алу Русланович</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.card}>
          <h3 className={s.cardTitle}>Адреса</h3>
          <ul className={s.list}>
            <li>
              <span>Юр. адрес:</span>
              <span>г. Грозный, ул. Кошевого д. 60</span>
            </li>
            <li>
              <span>Факт. адрес:</span>
              <span>г. Грозный, бульвар Эсамбаева д. 11</span>
            </li>
          </ul>
        </div>
      </div>
      <ContactForm img={img} />
    </section>
  );
};

export default Contacts;
