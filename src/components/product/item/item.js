import React from "react";
import style from "./item.module.css";

export const Item = ({ index, elementItem, shadows }) => {
  return (
    <div key={index} className={style.oneItem}>
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
      <div className={style.diamAll}>
        <p>{elementItem.diametr}</p>
        <p>{elementItem.cost} ₽</p>
      </div>
    </div>
  );
};
