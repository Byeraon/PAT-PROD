import React from "react";
import reactDom from "react-dom";
import { useState } from "react";
import style from "./services.module.css";

export const Services = () => {
  const [blocks, setBlock] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const data = [
    {
      number: 1,
      text: ["ПОЗВОНИТЕ НАМ ПО НОМЕРУ +7 (920) 365-86-00", " И СДЕЛАЙТЕ ЗАКАЗ"],
      color: "#2191BE",
    },
    {
      number: 2,
      text: ["ОЖИДАЙТЕ!", " ВАШ ЗАКАЗ ДОСТАВЯТ В ТЕЧЕНИИ 2-3 ДНЕЙ"],
      color: "#D17C30",
    },
    {
      number: 3,
      text: ["ЖЕЛАЕМ ВАМ", "ПРИЯТНОГО ПОЛЬЗОВАНИЯ НАШЕЙ ПРОДУКЦИЕЙ!"],
      color: "#219653",
    },
  ];
  return (
    <div className={style.page}>
      <h2>ДОСТАВКА И ОПЛАТА</h2>
      {!blocks ? (
        <div
          onAnimationEnd={() => {
            setBlock((prevstate) => !prevstate);
          }}
          id="window"
          className={style.changingBlock}
        >
          <p style={{ color: data[currentIndex].color }}>
            {data[currentIndex].number}
          </p>
          <div className={style.infoBlock}>
            {data[currentIndex].text.map((el) => (
              <h4 style={{ color: data[currentIndex].color }}>
                {el}
                <br />
              </h4>
            ))}
          </div>
          <div className={style.buttonsBlock}>
            <button
              disabled={currentIndex === 0}
              onClick={
                currentIndex !== 0
                  ? () => {
                      setIndex((prevstate) => prevstate - 1);
                    }
                  : () => {}
              }
              style={
                currentIndex === 0
                  ? {
                      webkitTransform: "rotate(180deg)",
                      opacity: "0.5",
                      cursor: "not-allowed",
                      backgroundColor: data[currentIndex].color,
                      transform: "rotate(180deg)",
                    }
                  : {
                      webkitTransform: "rotate(180deg)",
                      backgroundColor: data[currentIndex].color,
                      transform: "rotate(180deg)",
                    }
              }
            ></button>
            {/* <h4
              onClick={() => {
                const element = document.getElementById("window");
                reactDom.findDOMNode(element).className = style.notShowing;
              }}
              style={
                currentIndex === data.length - 1
                  ? {
                      color: data[currentIndex].color,
                      opacity: "1",
                      marginBottom: "0",
                    }
                  : {
                      color: data[currentIndex].color,
                      opacity: "0",
                      zIndex: "-1",
                      marginBottom: "-20px",
                    }
              }
            >
              ПОДРОБНЕЕ
            </h4> */}
            <button
              disabled={currentIndex === data.length - 1}
              onClick={
                currentIndex !== data.length - 1
                  ? () => {
                      setIndex((prevstate) => prevstate + 1);
                    }
                  : () => {}
              }
              style={
                currentIndex === data.length - 1
                  ? {
                      opacity: "0.5",
                      cursor: "not-allowed",
                      backgroundColor: data[currentIndex].color,
                    }
                  : { backgroundColor: data[currentIndex].color }
              }
            ></button>
          </div>
          <div className={style.truckTrace}>
            <div
              style={
                currentIndex === 0
                  ? {
                      marginLeft: "calc(0% - 45px)",
                    }
                  : currentIndex === 1
                  ? {
                      marginLeft: "calc(50% - 70px)",
                    }
                  : {
                      marginLeft: "calc(100% - 95px)",
                    }
              }
              className={style.truck}
            >
              <svg
                class="mmo-illustration--truck"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  style={{ transition: "400ms all" }}
                  fill={data[currentIndex].color}
                  fill-rule="evenodd"
                >
                  <path
                    d="M84 47.848V36c0-.21-.08-.725-.066-1.517.017-.9-.027-1.54-.047-1.982-.018-.397-.08-.964-.145-1.724-.085-1-.245-1.852-.494-2.605-.222-.666-.54-1.35-.94-2.07-.464-.832-1.027-1.582-1.683-2.24l-8.964-9c-.97-.976-2.176-1.56-3.59-2.146-1.41-.585-2.804-.714-4.18-.714H61V6.91c0-1.856-.888-3.55-2.202-4.87C57.48.72 55.61 0 53.75 0H7.398c-1.86 0-3.804.72-5.12 2.04C.96 3.36 0 5.055 0 6.91v46.544c0 .88.376 1.72.65 2.514.384 1.104 1.197 2.05 2.138 2.747.35.26.73.48 1.02.668.87.562 1.815.797 2.9.896.016 0 .044 0 .06.003.667 2.668 2.03 5.073 4.08 7.13C13.86 70.44 17.614 72 21.877 72c4.264 0 8.017-1.743 11.03-4.77 2.03-2.035 3.38-4.23 4.055-7.23h10.4c.675 3 2.023 5.195 4.052 7.232 3.013 3.025 6.764 4.677 11.027 4.677 4.264 0 8.015-1.516 11.028-4.542 2.025-2.034 3.373-4.383 4.05-7.014.098.002.204.016.324.02.738.018 1.212.024 1.59-.007.195-.017.542-.045 1.05-.09 1.084-.1 1.997-.333 2.868-.895.29-.187.607-.408.957-.667.94-.697 1.628-1.643 2.01-2.747.276-.794.402-1.635.402-2.514 0-1.855-.625-3.55-1.938-4.868-.274-.274-.784-.516-.784-.738"
                    fill="#FFF"
                  ></path>
                  <path d="M56.148 56.346c0-1.552.567-2.894 1.7-4.028 1.135-1.134 2.477-1.7 4.03-1.7 1.55 0 2.893.566 4.026 1.7 1.134 1.134 1.7 2.476 1.7 4.028 0 1.55-.566 2.894-1.7 4.027-1.133 1.134-2.476 1.7-4.027 1.7-1.552 0-2.894-.566-4.028-1.7-1.135-1.133-1.702-2.476-1.702-4.027zM73.53 32.84H56.15V21.383H63.3c.393 0 .725.134.996.402l8.827 8.727c.272.27.408.597.408.985v1.343zM15.853 56.346c0-1.552.567-2.894 1.7-4.028 1.134-1.134 2.477-1.7 4.028-1.7 1.552 0 2.894.566 4.028 1.7 1.134 1.134 1.7 2.476 1.7 4.028 0 1.55-.566 2.894-1.7 4.027-1.134 1.134-2.476 1.7-4.028 1.7-1.55 0-2.894-.566-4.028-1.7-1.133-1.133-1.7-2.476-1.7-4.027zM4 53.456c0 .453.06.855.18 1.203.122.348.325.628.612.84.287.212.536.386.747.523.21.136.565.227 1.063.272.498.046.837.076 1.018.09.182.017.567.017 1.156 0 .588-.014.928-.02 1.018-.02 0 3.21 1.132 5.953 3.395 8.226 2.263 2.274 4.994 3.41 8.193 3.41 3.2 0 5.93-1.136 8.193-3.41 2.264-2.272 3.395-5.014 3.395-8.226h17.384c0 3.212 1.132 5.954 3.395 8.227C56.01 66.865 58.742 68 61.94 68c3.2 0 5.93-1.136 8.194-3.41 2.263-2.272 3.395-5.014 3.395-8.226h2.898c.09 0 .43.007 1.02.022.587.016.972.016 1.153 0 .182-.015.52-.045 1.02-.09.497-.046.852-.137 1.063-.273.21-.137.46-.31.747-.523.287-.212.49-.492.61-.84.122-.35.182-.75.182-1.205 0-.788-.286-1.47-.86-2.046-.573-.577-1.252-.865-2.037-.865V36c0-.242.008-.773.023-1.59.015-.82.015-1.395 0-1.728-.015-.334-.053-.856-.113-1.568-.06-.712-.16-1.273-.295-1.682-.135-.41-.347-.87-.633-1.387-.287-.515-.627-.97-1.02-1.363l-8.962-9c-.573-.576-1.335-1.06-2.286-1.455-.952-.394-1.834-.59-2.65-.59H56.15V6.908c0-.79-.287-1.47-.86-2.046C54.715 4.288 54.036 4 53.25 4H6.898c-.785 0-1.464.288-2.037.864C4.287 5.44 4 6.12 4 6.91v46.545z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div
            style={{ backgroundColor: data[currentIndex].color }}
            className={style.truckPoints}
          >
            <div
              style={
                currentIndex === 0
                  ? {
                      backgroundColor: data[currentIndex].color,
                      transform: "scale(1.4)",
                    }
                  : {
                      backgroundColor: data[currentIndex].color,
                      transform: "scale(1)",
                      webkitTransform: "scale(1)",
                    }
              }
              className={style.circle}
            ></div>
            <div
              style={
                currentIndex === 1
                  ? {
                      backgroundColor: data[currentIndex].color,
                      transform: "scale(1.4)",
                      webkitTransform: "scale(1.4)",
                    }
                  : {
                      backgroundColor: data[currentIndex].color,
                      transform: "scale(1)",
                      webkitTransform: "scale(1)",
                    }
              }
              className={style.circle}
            ></div>
            <div
              style={
                currentIndex === 2
                  ? {
                      backgroundColor: data[currentIndex].color,
                      transform: "scale(1.4)",
                      webkitTransform: "scale(1.4)",
                    }
                  : {
                      backgroundColor: data[currentIndex].color,
                      transform: "scale(1)",
                      webkitTransform: "scale(1)",
                    }
              }
              className={style.circle}
            ></div>
          </div>
        </div>
      ) : (
        <div className={style.changingBlock}>
          <div className={style.beforeBottle}></div>
          <div className={style.bottle}> </div>
        </div>
      )}
    </div>
  );
};
