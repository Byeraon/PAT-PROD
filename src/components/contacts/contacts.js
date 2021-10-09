import React from "react";
import { NavLink } from "react-router-dom";
import style from "./contacts.module.css";

export const Contacts = () => {
  return (
    <div className={style.page}>
      <h2>КОНТАКТЫ</h2>
      <button className={style.buttonHomepage}>
        <NavLink to="/" className={style.link}>
          На главную
        </NavLink>
      </button>
      <hr color="#62cef8" style={{ width: "40%", margin: "50px 0" }} />
      <div className={style.blockDatas}>
        <h4>~ Номер телефона ~</h4>
        <br />
        <h5>+7 (920) 365-86-00</h5>
        <h5>+7 (920) 357-97-27</h5>
        <h5>+7 (910) 999-43-93</h5>
      </div>
      <hr color="#62cef8" style={{ width: "40%", margin: "50px 0" }} />
      <div className={style.blockDatas}>
        <h4>~ E-mail ~</h4>
        <br />
        <h5>iveuropet@mail.ru</h5>
      </div>

      <hr color="#62cef8" style={{ width: "40%", margin: "50px 0" }} />
      <div className={style.blockDatas}>
        <h4>~ Адрес ~</h4>
        <br />
        <h5>г. Иваново, ул.Минская, д.126Б</h5>
      </div>
      <hr color="#62cef8" style={{ width: "40%", margin: "50px 0" }} />
    </div>
  );
};
