import React from "react";
import { NavLink } from "react-router-dom";

import style from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={style.logo}> </div>
      <div className={style.topTextes}>
        <div className={style.firstText}>
          <NavLink
            className={style.link}
            to="/product"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            ПРОДУКЦИЯ
          </NavLink>
          <h3 style={{ marginTop: "7%" }}>Бутылки</h3>
          <h3>Винтовые колпачки</h3>
          <h3>Ручки</h3>
          <h3>Флаконы</h3>
          <h3>Канистры</h3>
          <h3>Изготовление пресс-форм с логотипом</h3>
        </div>
        <div className={style.secondText}>
          <NavLink className={style.link} to="/contacts">
            КОНТАКТЫ
          </NavLink>
          <h3 style={{ marginTop: "7%" }}>
            г. Иваново, ул.Минская, д.126Б{" "}
            <span className={style.gpslogo}></span>
          </h3>
          <h3>
            iveuropet@mail.ru <span className={style.maillogo}></span>
          </h3>
          <h3>
            +7 (920) 365-86-00 +7 (920) 357-97-27{" "}
            <span className={style.calllogo}></span>
          </h3>
          <h3>+7 (910) 999-43-93</h3>
        </div>
      </div>
      <h3>© 2021 • ООО «ИВЕВРОПЭТ» Производство полимерной тары</h3>
    </footer>
  );
};
