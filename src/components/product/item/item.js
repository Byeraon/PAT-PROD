import React, { useState } from "react";
import style from "./item.module.css";

export const Item = ({ widthed, index, elementItem }) => {
  const [currentColor, setColor] = useState(0);
  let array = [];

  elementItem.flags.map((el) => {
    if (el === "milk") {
      array.push(
        { color: "white", name: "Белая" },
        { color: "#ebebeb", name: "Прозрачная" }
      );
    }
    if (el === "alcohool") {
      array.push(
        { color: "white", name: "Белая" },
        { color: "#ebebeb", name: "Прозрачная" },
        { color: "#a88960", name: "Коричневая" }
      );
    }
    if (el === "fresh") {
      array.push({ color: "#ebebeb", name: "Прозрачная" });
    }
    if (el === "podsoln") {
      array.push({ color: "#ebebeb", name: "Прозрачная" });
    }
    if (el === "cosmetic") {
      array.push(
        { color: "#ebebeb", name: "Прозрачная" },
        { color: "white", name: "Белая" },
        {
          color: "linear-gradient(to right, #F6EFD2, #CEAD78)",
          name: "Цветная | Под заказ",
        }
      );
    }
    if (el === "teh") {
      array.push(
        { color: "#ebebeb", name: "Прозрачная" },
        { color: "white", name: "Белая" }
      );
    }
    return true;
  });

  array = Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);

  return (
    <div key={index} style={{ height: widthed }} className={style.oneItem}>
      <div
        style={{
          backgroundSize: elementItem.imgSize,
          backgroundImage: `url(${elementItem.img})`,
        }}
        className={style.photoItem}
      >
        <div className={style.leftLine}></div>
        <div className={style.rightLine}></div>
      </div>
      <p>{elementItem.name}</p>
      <p style={{ marginTop: "auto" }}>Цвет: {array[currentColor].name}</p>
      <div className={style.colorsBlock}>
        {array.map((el, index) => (
          <div
            onClick={() => {
              setColor(index);
            }}
            className={style.color}
            key={index}
            style={
              currentColor === index
                ? { background: el.color, border: "1px solid #2191be" }
                : { background: el.color, border: "1px solid #808080" }
            }
          ></div>
        ))}
      </div>
      <div className={style.diamAll}>
        <p style={{ fontWeight: 200 }}>{elementItem.diametr}</p>
        <p>{elementItem.cost} ₽</p>
      </div>
    </div>
  );
};
