import React from "react";
import styles from "./index.module.sass";
import { Link } from "react-router-dom";
const METHODS = ["WhatsApp", "Telegram", "Звонок", "SMS", "Email"];

const BOT_TOKEN = "8485434309:AAGnR6UhiacbSD_Q-k0u_viInqNETIX0vOE";
const CHAT_ID = "773413595"; // нужно вставить нужный chat_id
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const ContactForm = ({ img }) => {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    method: METHODS[0],
    agree: false,
  });
  const [touched, setTouched] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  //  Подключение jQuery и плагина маски для телефона
  React.useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    (async () => {
      if (!window.jQuery) {
        await loadScript("https://snipp.ru/cdn/jquery/2.1.1/jquery.min.js");
      }
      await loadScript(
        "https://snipp.ru/cdn/maskedinput/jquery.maskedinput.min.js"
      );

      if (window.$ && window.$.mask) {
        window.$.mask.definitions["h"] = "[0|1|3|4|5|6|7|9]";
        window.$(".mask-phone").mask("+7 (h99) 999-99-99");
      }
    })();
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const digits = form.phone.replace(/\D/g, "");
  const phoneValid = digits.length === 11 && digits.startsWith("7");
  const nameValid = form.name.trim().length >= 2;
  const canSubmit = nameValid && phoneValid && form.agree;

  // Отправка заявки в Telegram
  const submit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, agree: true });

    if (!canSubmit) return;

    const message = `
      📩 *Новая заявка с сайта WAYCATERING*
      👤 Имя: ${form.name}
      📞 Телефон: ${form.phone}
      💬 Способ связи: ${form.method}
      ✅ Согласие: ${form.agree ? "Да" : "Нет"}
          `;

    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (res.ok) {
        alert("Заявка успешно отправлена ✅");
        setForm({ name: "", phone: "", method: METHODS[0], agree: false });
      } else {
        alert("Ошибка при отправке в Telegram 😢");
      }
    } catch (err) {
      console.error("Ошибка:", err);
      alert("Не удалось отправить сообщение");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contacts}>
      <div className="wrapper">
        <div className={styles.div}>
          <img className={styles.img} src={img} alt="" />
          <div className={styles.div2}>
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
                />
              </label>

              <label className={styles.label}>
                Номер для связи
                <input
                  className={`mask-phone ${styles.input} ${
                    touched.phone && !phoneValid ? styles.error : ""
                  }`}
                  type="text"
                  name="phone"
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                />
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
                  <span className={styles.chevron}>▾</span>
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
                  <Link href="#" target="_blank" rel="noreferrer">
                    Политикой конфиденциальности
                  </Link>
                </span>
              </label>

              <div className={styles.submitRow}>
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={!canSubmit || loading}
                >
                  {loading ? "Отправка..." : "Отправить"}
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
