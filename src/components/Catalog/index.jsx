import React from "react";
import s from "./index.module.sass";

const Catalog = ({ data }) => {
  return (
    <div className={s.section}>
      <div className="wrapper">
        {data.map((section) => (
          <div key={section.title} className={s.block}>
            <h2 className={s.title}>{section.title}</h2>

            <div className={s.grid}>
              {(section.items ?? []).map((it) => (
                <article className={s.card} key={it.id}>
                  <div className={s.thumb}>
                    <img src={it.img} alt={it.title} />
                  </div>
                  <h3 className={s.cardTitle}>{it.title}</h3>
                  <p className={s.desc}>{it.desc}</p>
                  <div className={s.meta}>
                    <span className={s.price}>
                      <b>{it.price}</b> <span className={s.ruble}>₽</span>
                    </span>
                    <span className={s.unit}>
                      {it.unit.replace("₽", "").trim()}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
