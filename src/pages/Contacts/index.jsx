import React from "react";
import s from "./index.module.sass";

export default function Contacts() {
  return (
    <section className={s.contacts}>
      <div className="wrapper">
        <h1 className={s.title}>Контакты</h1>
        <p className={s.lead}>
          Свяжитесь с WayCatering удобным способом: напишите в мессенджер,
          позвоните или оставьте заявку — мы ответим в рабочее время.
        </p>

        <div className={s.grid}>
          {/* Левая колонка */}
          <div className={s.col}>
            <div className={s.card}>
              <h3 className={s.cardTitle}>Реквизиты</h3>

              <div className={s.field}>
                <div className={s.label}>ИП</div>
                <div className={s.value}>Магомедов Адам Увайсович</div>
              </div>

              <div className={s.field}>
                <div className={s.label}>ИНН</div>
                <div className={s.value}>201045745200</div>
              </div>

              <div className={s.field}>
                <div className={s.label}>ОГРНИП</div>
                <div className={s.value}>32120000030880</div>
              </div>

              <div className={s.field}>
                <div className={s.label}>Email</div>
                <div className={s.value}>
                  <a href="mailto:shantilakes@gmail.com">
                    shantilakes@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={s.card}>
              <h3 className={s.cardTitle}>Адреса</h3>

              <div className={s.field}>
                <div className={s.label}>Юр. адрес</div>
                <div className={s.value}>г. Грозный, ул. Кошевого д. 60</div>
              </div>

              <div className={s.field}>
                <div className={s.label}>Факт. адрес</div>
                <div className={s.value}>
                  г. Грозный, бульвар Эсамбаева д. 11
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className={s.col}>
            <div className={s.card}>
              <h3 className={s.cardTitle}>Быстрые контакты</h3>

              <p className={s.note}>
                Позвоните или напишите — обсудим задачу и предложим варианты под
                ваш бюджет и формат события.
              </p>

              <div className={s.field}>
                <div className={s.label}>Телефон</div>
                <div className={s.value}>
                  <a href="tel:+79899299874">+7 (989) 929-98-74</a>
                </div>
              </div>

              <div className={s.field}>
                <div className={s.label}>Email</div>
                <div className={s.value}>
                  <a href="mailto:shantilakes@gmail.com">
                    shantilakes@gmail.com
                  </a>
                </div>
              </div>

              <div className={s.field}>
                <div className={s.label}>Контактное лицо</div>
                <div className={s.value}>Хасуев Алу Русланович</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
