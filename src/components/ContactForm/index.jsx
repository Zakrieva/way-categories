import React from "react";
import styles from "./index.module.sass";
import { Link } from "react-router-dom";

const METHODS = ["WhatsApp", "Telegram", "Звонок", "SMS", "Email"];

// ⚠️ Токен/чат видны на клиенте (для продакшна вынеси на сервер/серверлес)
const BOT_TOKEN = "8485434309:AAGnR6UhiacbSD_Q-k0u_viInqNETIX0vOE";
const CHAT_ID = "773413595";
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const ContactForm = ({ img }) => {
  const [form, setForm] = React.useState({
    name: "",
    phone: "", // сохраняем сюда при blur (см. ниже)
    method: METHODS[0],
    agree: false,
  });
  const [touched, setTouched] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // телефон через ref, чтобы jQuery-маска не конфликтовала с React
  const phoneRef = React.useRef(null);
  const [phoneComplete, setPhoneComplete] = React.useState(false);

  // загрузка jQuery + maskedinput с твоих ссылок
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

      const $ = window.$;
      if ($ && $.mask && phoneRef.current) {
        $.mask.definitions["h"] = "[0|1|3|4|5|6|7|9]";
        $(phoneRef.current).mask("+7 (h99) 999-99-99", {
          completed: function () {
            setPhoneComplete(true);
            // синхронизируем «готовое» значение в стейт
            setForm((s) => ({ ...s, phone: this.value }));
          },
        });

        // при любом вводе/стирании пересчитываем флаг завершенности
        $(phoneRef.current).on("input", function () {
          const v = this.value || "";
          const done = v.indexOf("_") === -1 && /\d/.test(v);
          setPhoneComplete(done);
        });
      }
    })();
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    if (e.target.name === "phone") {
      // при потере фокуса записываем текущее значение из input в стейт
      setForm((s) => ({ ...s, phone: e.target.value }));
    }
  };

  // валидации
  const nameValid = form.name.trim().length >= 2;

  // берём «живое» значение из ref (самое актуальное)
  const phoneRaw = phoneRef.current?.value || form.phone || "";
  const digits = phoneRaw.replace(/\D/g, "");
  const phoneValid = phoneComplete && /^7\d{10}$/.test(digits);

  const canSubmit = nameValid && phoneValid && form.agree;

  // отправка в Telegram
  const submit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, agree: true });

    if (!canSubmit) return;

    const message = `📩 *Новая заявка с сайта WAYCATERING*
👤 Имя: ${form.name}
📞 Телефон: ${phoneRaw}
💬 Способ связи: ${form.method}
✅ Согласие: ${form.agree ? "Да" : "Нет"}`;

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

      const ok = res.ok;
      if (ok) {
        alert("Заявка успешно отправлена ✅");
        // сбрасываем форму и флаги
        setForm({ name: "", phone: "", method: METHODS[0], agree: false });
        setPhoneComplete(false);
        if (phoneRef.current) phoneRef.current.value = "";
      } else {
        const data = await res.json().catch(() => ({}));
        alert(`Ошибка при отправке в Telegram 😢 ${data?.description || ""}`);
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
          {img && <img className={styles.img} src={img} alt="" />}
          <div className={styles.div2}>
            <h1 className={styles.contacts_title}>
              Свяжитесь с нами! Рады будем вам помочь.
            </h1>

            <form className={styles.form} onSubmit={submit} noValidate>
              {/* Имя */}
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

              {/* Телефон с jQuery-маской через ref (без value/onChange) */}
              <label className={styles.label}>
                Номер для связи
                <input
                  ref={phoneRef}
                  className={`${styles.input} ${
                    touched.phone && !phoneValid ? styles.error : ""
                  }`}
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  inputMode="tel"
                  autoComplete="tel"
                  onBlur={onBlur}
                />
                {touched.phone && !phoneValid && (
                  <span className={styles.hint}>
                    Формат: +7 (999) 123-45-67
                  </span>
                )}
              </label>

              {/* Метод связи */}
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

              {/* Согласие + правильный Link (react-router-dom → to) */}
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
                  <Link to="/privacy">Политикой конфиденциальности</Link>
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

              {/* отладка — можно временно включить
              <pre style={{fontSize:12}}>
                {JSON.stringify({ nameValid, phoneValid, phoneComplete, canSubmit, phoneRaw }, null, 2)}
              </pre>
              */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
