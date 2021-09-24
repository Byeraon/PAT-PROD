import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import style from "./infoPage.module.css";

export const InfoPage = (props) => {
  let { itemPath } = useParams();
  const currentItem = props.allItems.find((el) => el.patchName === itemPath);
  const [currentImage, setImage] = useState(0);

  return (
    <div className={style.page}>
      <h2>{currentItem.pageName}</h2>
      <div className={style.anotherInfo}>
        <>
          <div className={style.slider}>
            <div className={style.intoSlider}>
              <div
                style={{
                  transition: "200ms all",
                  backgroundImage: `url(${currentItem.img[currentImage]})`,
                }}
                className={style.centerPhoto}
              ></div>
              <div className={style.playList}>
                {currentItem.img.map((el, index) => (
                  <button
                    key={index}
                    style={
                      index === currentImage
                        ? {
                            backgroundImage: `url(${el})`,
                            borderColor: "#2191be",
                          }
                        : {
                            backgroundImage: `url(${el})`,
                            borderColor: "#a1cbdc",
                          }
                    }
                    onClick={() => {
                      setImage(index);
                    }}
                    className={style.partPlayList}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          &emsp;
          {currentItem.info.map((el, index) =>
            index === 0 ? (
              <p key={index} style={{ marginTop: "-1.5em" }}>
                {el}
              </p>
            ) : (
              <p key={index}>{el}</p>
            )
          )}
        </>
      </div>
    </div>
  );
};
