import React from "react";
import style from "./homepage.module.css";
import Image1 from "../../images/bottles/1 BPF химия/attachment.jpg";
import Image2 from "../../images/bottles/1 BRC Риат прозрачная/attachment.jpg";
import Image3 from "../../images/bottles/1 BPF 28 мм пиво/attachment.jpg";
import Image5 from "../../images/SliderImages/5514733-5a7921.jpg";
import Image6 from "../../images/SliderImages/1598367517_37.jpg";
import Image7 from "../../images/info/cosmetic/UMETASS-100.jpg_q50.jpg";
import Image8 from "../../images/info/cosmetic/000024103043.jpg";
import Image9 from "../../images/info/cosmetic/200x50-мл-Frost-бостон-круглая-стеклянная-эфирное-масло-разливочной-с-черный-polyseal-конус.jpg";
import Image4 from "../../images/SliderImages/svezh.jpg";
import { NavLink } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className={style.homepage}>
      <div className={style.slider}>
        <a href="#top">
          <div className={style.preimBlock}>НАШИ ПРЕИМУЩЕСТВА</div>
        </a>
        <div className={style.rectangleTop}>
          <h2>
            ВЫСОКОКАЧЕСТВЕННАЯ
            <span style={{ fontWeight: "bold" }}> ПЭТ ПРОДУКЦИЯ,</span> БУТЫЛКИ
            И ФЛАКОНЫ ДЛЯ: <br />
            МОЛОКА И МОЛОЧНОЙ ПРОДУКЦИИ, <br />
            ВОДЫ И СОКОВ,
            <br />
            АЛКОГОЛЬНОЙ ПРОДУКЦИИ,
            <br />
            ПОДСОЛНЕЧНОГО МАСЛА, УКСУСА,
            <br />
            КОСМЕТИКИ, СПОРТА И МЕДИЦИНЫ,
            <br />
            КАНИСТРЫ ДЛЯ ТЕХНИЧЕСКИХ ЖИДКОСТЕЙ
            <br />
          </h2>

          <button className={style.buttonHomepage}>
            <NavLink to="/product" className={style.link}>
              ПОДРОБНЕЕ
            </NavLink>
          </button>
        </div>

        <div
          className={style.sliderItem + " " + style.sliderAnim}
          style={{ backgroundImage: `url(${Image1})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image3})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image4})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image5})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image6})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image7})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image8})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image9})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image1})` }}
        ></div>
        <div
          className={style.sliderItem}
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
      </div>
      <div id="top" className={style.blockPreims}>
        <div className={style.plackOne}>
          <div className={style.logoPlack + " " + style.first}></div>
          <h3>
            На рынке с <span style={{ color: "#2191be" }}>2001 года</span>
          </h3>
        </div>
        <div className={style.plackOne}>
          <div className={style.logoPlack + " " + style.second}></div>
          <h3>
            Гарантия <span style={{ color: "#2191be" }}>высокого качества</span>
          </h3>
        </div>
        <div className={style.plackOne}>
          <div className={style.logoPlack + " " + style.thrid}></div>
          <h3>
            Гибкая <span style={{ color: "#2191be" }}>система скидок</span>
          </h3>
        </div>
      </div>
      <div className={style.infoBlock}>
        <h1>ООО «ИВЕВРОПЭТ»</h1>

        <h2>
          Производственная компания «ИВЕВРОПЭТ» готова предложить Вам свои
          услуги по: <br />
          - производству и продаже ПЭТ бутылок, ПЭТ преформы, ПРЕСС-формы,
          ручек, укупорочных крышек, канистр, пегасы и.т.д. <br />
          - транспортировке грузов;
          <br />
          Новейшее высокотехнологичное оборудование позволяет нам не просто
          производить ПЭТ продукцию, а найти индивидуальный подход к каждому
          нашему клиенту. Мы гордимся качеством производимой продукции! Все
          сотрудники - от операторов станков до руководства компании - ежедневно
          прикладывают огромные усилия, чтобы удовлетворить потребности наших
          клиентов в качественной упаковке. Мы стремимся к тому, чтобы наши
          деловые отношения были для Вас максимально выгодными!
        </h2>
      </div>
    </div>
  );
};
