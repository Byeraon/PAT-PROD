import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import style from "./header.module.css";

export const Header = () => {
  const [isMenu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu((prevstate) => !prevstate);
  };

  useEffect(() => {
    if (isMenu) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
      document.body.style.transition = 0;
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }
  }, [isMenu]);

  return (
    <header>
      <div
        style={isMenu ? { opacity: 1 } : {}}
        onClick={handleChange}
        id={style.navIcon}
        className={isMenu ? style.open : undefined}
      >
        <div
          style={
            isMenu
              ? { height: "4000px", width: "4000px", bottom: "100%" }
              : { height: "190px", width: "190px" }
          }
          className={style.bluePlace}
        ></div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <NavLink className={style.logoPlace} exact to="/">
        <div className={style.logo}></div>
        <div className={style.linelogo}></div>
        <h1>Ивевропэт</h1>
      </NavLink>
      {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ? (
        isMenu && (
          <div className={style.menu}>
            <NavLink
              onTransitionEnd={handleChange}
              className={style.link}
              activeClassName={style.activeLink}
              exact
              to="/"
            >
              О компании
            </NavLink>
            <NavLink
              onTransitionEnd={handleChange}
              className={style.link}
              activeClassName={style.activeLink}
              to="/product"
            >
              Каталог продукции
            </NavLink>
            <NavLink
              onTransitionEnd={handleChange}
              to="/info"
              className={style.link}
              activeClassName={style.activeLink}
            >
              Полезно знать
            </NavLink>
            <NavLink
              onTransitionEnd={handleChange}
              className={style.link}
              activeClassName={style.activeLink}
              to="/services"
            >
              Услуги
            </NavLink>
            <NavLink
              onTransitionEnd={handleChange}
              className={style.link}
              activeClassName={style.activeLink}
              to="/contacts"
            >
              Контакты
            </NavLink>
            <div onClick={handleChange} className={style.arrowRealy}></div>
          </div>
        )
      ) : (
        <div className={style.menu}>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            exact
            to="/"
          >
            О компании
          </NavLink>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/product"
          >
            Каталог продукции
          </NavLink>
          <NavLink
            to="/info"
            className={style.link}
            activeClassName={style.activeLink}
          >
            Полезно знать
          </NavLink>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/services"
          >
            Услуги
          </NavLink>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </div>
      )}
    </header>
  );
};
