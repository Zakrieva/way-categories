import React, { useState } from "react";
import styles from "./index.module.sass";
import img from "../../assets/img/home/img6.jpg";
import vector from "../../assets/svg/Vector.svg";
const METHODS = ["WhatsApp", "Telegram", "Звонок", "SMS", "Email"];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    method: METHODS[0],
    agree: false,
  });
  const [touched, setTouched] = useState({});

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const phoneValid = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(form.phone);
  const nameValid = form.name.trim().length >= 2;
  const canSubmit = nameValid && phoneValid && form.agree;

  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, agree: true });
    if (!canSubmit) return;
    // TODO: отправка — axios/fetch
    console.log("FORM DATA:", form);
    alert("Заявка отправлена!");
  };

  return (
    <div className={styles.contacts}>
      <div className="wrapper">
        <div className={styles.div}>
          <img className={styles.img} src={img} alt="" />
          <div>
            <h1 className={styles.contacts_title}>
              Свяжитесь с нами! Рады будем вам помочь.
            </h1>
            <form className={styles.form} onSubmit={submit} noValidate>
              <label className={styles.label}>
                Имя и фамилия
                <input
                  className={`${styles.input} ${
                    touched.name && !nameValid ? styles.error : ""
                  }`}
                  type="text"
                  name="name"
                  placeholder="Имя и фамилия"
                  value={form.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  autoComplete="name"
                />
                {touched.name && !nameValid && (
                  <span className={styles.hint}>Введите минимум 2 символа</span>
                )}
              </label>

              <label className={styles.label}>
                Номер для связи
                <input
                  className={`${styles.input} ${
                    touched.phone && !phoneValid ? styles.error : ""
                  }`}
                  type="tel"
                  name="phone"
                  placeholder="+7(___) ___-__-__"
                  inputMode="tel"
                  value={form.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {touched.phone && !phoneValid && (
                  <span className={styles.hint}>
                    Формат: +7 (999) 123-45-67
                  </span>
                )}
              </label>

              <label className={styles.label}>
                Способ связи
                <div className={styles.selectWrap}>
                  <select
                    className={styles.select}
                    name="method"
                    value={form.method}
                    onChange={onChange}
                  >
                    {METHODS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <span className={styles.chevron} aria-hidden>
                    ▾
                  </span>
                </div>
              </label>

              <label className={styles.agreeRow}>
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                <span>
                  Я прочитал(а) и соглашаюсь с{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    Политикой конфиденциальности
                  </a>
                </span>
              </label>

              <div className={styles.submitRow}>
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={!canSubmit}
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
