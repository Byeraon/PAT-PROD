import React from "react";
import style from "./type.module.css";

export const Type = (props) => {
  const handleChoose = () => {
    props.setType(props.type);
  };

  return (
    <button
      style={
        props.currentType === props.type
          ? { backgroundColor: "#2191be", color: "white" }
          : {}
      }
      className={style.buttonChoose}
      onClick={handleChoose}
    >
      {props.type}
    </button>
  );
};
