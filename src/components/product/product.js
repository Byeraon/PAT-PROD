import React, { useEffect, useState } from "react";
import { Item } from "./item/item";
import style from "./product.module.css";
import { Type } from "./types/type";
import _03_38_Mol from "../../images/bottles/0,3 BRC 38 мм Молзавод/attachmentt.jpeg";
import _03_38_Iog from "../../images/bottles/0,3 BRC белая Йогурт/attachment.jpeg";
import _03_38_Kvadr from "../../images/bottles/0,3 квадратная прозрачная/attachment.jpg";
import _05_28 from "../../images/bottles/0,5 BPF 28 мм/DSC_3020.jpg";
import _05_28_Him from "../../images/bottles/0,5 BPF 28 мм химия/DSC_9780.jpg";
import _05_28_Rastvor from "../../images/bottles/0,5 BPF химия растворитель/attachment.jpeg";
import _05_28_Kvadr_Mat from "../../images/bottles/0,5 BRC квадратная белая матовая/attachmentt.jpg";
import _05_28_Mors from "../../images/bottles/0,5 BRC Морс/attachment.jpeg";
import _05_28_Riat from "../../images/bottles/0,5 BRC риат/attachment.jpg";
import _05_28_Kvadr from "../../images/bottles/0,5 квадратная BRC/attachment.jpg";
import _10_21_Maslo from "../../images/bottles/0,9 21 DIN масло/attachment.jpeg";
import _10_28_Rastvor from "../../images/bottles/0,9 BPF 28 мм химия растворитель/attachment.jpeg";
import _10_28_Him_Mat from "../../images/bottles/0,9 BPF Химия Белая матовая/attachment.jpeg";
import _10_28_Vine from "../../images/bottles/1 BPF 28 мм вино/attachment.jpg";
import _10_28_Pivo from "../../images/bottles/1 BPF 28 мм пиво/attachment.jpg";
import _10_28_Pivo_s from "../../images/bottles/1 BPF 28 мм пиво/attachment.jpeg";
import _10_28_Him from "../../images/bottles/1 BPF химия/attachment.jpg";
import _10_38_Milk_Riat from "../../images/bottles/1 BRC 38 мм риат/attachment.jpg";
import _10_28_Mors from "../../images/bottles/1 BRC Hotfill Морс/attachment.jpeg";
import _10_28_Milk_Mat from "../../images/bottles/1 BRC Молзавод белая матовая/attachment.jpeg";
import _10_28_Milk_Mat_Next from "../../images/bottles/1 BRC молоко белая матовая/attachment.jpg";
import _10_28_Milk_Next from "../../images/bottles/1 BRC молоко прозрачная/attachment.jpg";
import _15_38_Milk from "../../images/bottles/14-38Домик/attachment.jpeg";
import _15_28 from "../../images/bottles/1,5 BPF 28 мм/attachment.jpg";
import _15_38 from "../../images/bottles/1.5 BRC 38 мм/attachment.jpg";
import _20_28 from "../../images/bottles/2 BPF/attachment.jpeg";
import _45_48 from "../../images/bottles/4.5 BRC 48 мм/attachment.jpeg";
import _50_48 from "../../images/bottles/5 BRC 48 мм/attachment.jpg";

export const Product = () => {
  const [choosedDiam, setDiam] = useState("Все");
  const [typeWater, setWater] = useState("Все");
  const [maxState, setMax] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arrayRefs = [];
  const [filteredData, setData] = useState([]);

  useEffect(() => {
    if (arrayRefs.length > 0) {
      setMax(
        Math.max.apply(
          null,
          arrayRefs.map((el) => el.offsetHeight)
        )
      );
    }
  }, [arrayRefs]);

  useEffect(() => {
    let changingArray = [
      {
        litrage: "0.3 Л.",
        items: [
          {
            id: 0,
            img: _03_38_Mol,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",

            flags: ["milk", "fresh"],
            cost: 20,
          },
          {
            id: 1,
            img: _03_38_Iog,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["milk"],
            cost: 20,
          },
          {
            id: 2,
            img: _03_38_Kvadr,
            name: "ПЭТ бутылка квадратная Bericap",
            imgSize: "contain",
            diametr: "38 мм",
            flags: ["milk", "fresh", "cosmetic"],
            cost: 20,
          },
        ],
      },

      {
        litrage: "0.5 Л.",
        items: [
          {
            id: 3,
            img: _05_28,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            imgSize: "contain",
            flags: ["alcohool"],
            cost: 20,
          },

          {
            id: 6,
            img: _05_28_Rastvor,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            flags: ["cosmetic"],
            cost: 20,
          },
          {
            id: 5,
            img: _05_28_Kvadr_Mat,
            name: "ПЭТ бутылка квадатная матовая",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["cosmetic"],
            cost: 20,
          },
          {
            id: 6,
            img: _05_28_Mors,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["fresh"],
            cost: 20,
          },
          {
            id: 7,
            img: _05_28_Riat,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["milk", "fresh"],
            cost: 20,
          },
          {
            id: 8,
            img: _05_28_Kvadr,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["milk", "fresh"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "0.7 / 0.75 Л.",
        items: [
          {
            id: 10,
            img: _10_28_Rastvor,
            name: "ПЭТ бутылка",
            diametr: "28 мм",

            flags: ["teh"],
            cost: 20,
          },
          {
            id: 16,
            img: _10_28_Him,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            flags: ["teh", "cosmetic"],
            cost: 20,
          },
          {
            id: 4,
            img: _05_28_Him,
            name: "ПЭТ бутылка ",
            diametr: "28 мм",
            flags: ["teh", "cosmetic"],
            cost: 20,
          },

          {
            id: 7,
            img: _05_28_Riat,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["milk"],
            cost: 20,
          },
          {
            id: 8,
            img: _05_28_Kvadr,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },
          {
            id: 6,
            img: _05_28_Mors,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["fresh"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "0.93 / 0.95 Л.",
        items: [
          {
            id: 16,
            img: _10_38_Milk_Riat,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["milk"],
            cost: 20,
          },
          {
            id: 18,
            img: _10_28_Milk_Mat,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "0.85 / 1 Л.",
        items: [
          {
            id: 9,
            img: _10_21_Maslo,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            imgSize: "contain",
            flags: ["podsoln"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "1.0 Л.",
        items: [
          {
            id: 11,
            img: _10_28_Him_Mat,
            name: "ПЭТ бутылка Bericap",
            diametr: "28 мм",
            flags: ["cosmetic"],
            cost: 20,
          },

          {
            id: 16,
            img: _10_38_Milk_Riat,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            flags: ["milk"],
            cost: 20,
          },

          {
            id: 17,
            img: _10_28_Mors,
            name: "ПЭТ бутылка Bericap",
            diametr: "28 мм",
            flags: ["milk", "fresh"],
            cost: 20,
          },
          {
            id: 18,
            img: _10_28_Milk_Mat,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },
          {
            id: 19,
            img: _10_28_Milk_Mat_Next,
            name: "ПЭТ бутылка матовая",
            diametr: "28 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },

          {
            id: 21,
            img: _10_28_Milk_Next,
            name: "ПЭТ бутылка прозрачная",
            diametr: "28 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "1.4 / 1.5 Л.",
        items: [
          {
            id: 22,
            img: _15_38_Milk,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },

          {
            id: 23,
            img: _15_38,
            name: "ПЭТ бутылка Bericap",
            diametr: "38 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },
          {
            id: 23,
            img: _15_28,
            name: "ПЭТ бутылка BPF",
            diametr: "28 мм",

            flags: ["milk"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "1.5 / 2 Л.",
        items: [
          {
            id: 12,
            img: _10_28_Vine,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            imgSize: "contain",
            flags: ["alcohool"],
            cost: 20,
          },

          {
            id: 14,
            img: _10_28_Pivo,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            flags: ["alcohool"],
            cost: 20,
          },
          {
            id: 15,
            img: _10_28_Pivo_s,
            name: "ПЭТ бутылка",
            diametr: "28 мм",
            flags: ["alcohool"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "2.0 Л.",
        items: [
          {
            id: 24,
            img: _20_28,
            name: "ПЭТ бутылка BPF",
            diametr: "28 мм",
            imgSize: "contain",
            flags: ["milk"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "4.5 Л.",
        items: [
          {
            id: 25,
            img: _45_48,
            name: "ПЭТ бутылка",
            diametr: "48 мм",
            imgSize: "contain",
            flags: ["teh"],
            cost: 20,
          },
        ],
      },
      {
        litrage: "5.0 Л.",
        items: [
          {
            id: 25,
            img: _50_48,
            name: "ПЭТ бутылка",
            diametr: "48 мм",
            imgSize: "contain",
            flags: ["teh"],
            cost: 20,
          },
        ],
      },
    ];
    switch (choosedDiam) {
      case "28":
        changingArray = changingArray.map((el) => ({
          litrage: el.litrage,
          items: el.items.filter(
            (elementItem) => elementItem.diametr.replace(/ мм/, "") === "28"
          ),
        }));
        break;
      case "38":
        changingArray = changingArray.map((el) => ({
          litrage: el.litrage,
          items: el.items.filter(
            (elementItem) => elementItem.diametr.replace(/ мм/, "") === "38"
          ),
        }));
        break;
      case "48":
        changingArray = changingArray.map((el) => ({
          litrage: el.litrage,
          items: el.items.filter(
            (elementItem) => elementItem.diametr.replace(/ мм/, "") === "48"
          ),
        }));
        break;
      default:
        (() => {})();
    }
    switch (typeWater) {
      case "Молоко и молочная продукция":
        changingArray = changingArray.map((el) => ({
          ...el,
          items: el.items.filter((elementItem) =>
            elementItem.flags.includes("milk")
          ),
        }));
        break;
      case "Соки, фреши и смузи":
        changingArray = changingArray.map((el) => ({
          ...el,
          items: el.items.filter((elementItem) =>
            elementItem.flags.includes("fresh")
          ),
        }));
        break;
      case "Безалкогольная и алкогольная продукция":
        changingArray = changingArray.map((el) => ({
          ...el,
          items: el.items.filter((elementItem) =>
            elementItem.flags.includes("alcohool")
          ),
        }));
        break;
      case "Подсолнечное масло, уксус":
        changingArray = changingArray.map((el) => ({
          ...el,
          items: el.items.filter((elementItem) =>
            elementItem.flags.includes("podsoln")
          ),
        }));
        break;
      case "Косметика и фармацевтика":
        changingArray = changingArray.map((el) => ({
          ...el,
          items: el.items.filter((elementItem) =>
            elementItem.flags.includes("cosmetic")
          ),
        }));
        break;
      case "Технические жидкости":
        changingArray = changingArray.map((el) => ({
          ...el,
          items: el.items.filter((elementItem) =>
            elementItem.flags.includes("teh")
          ),
        }));
        break;
      default:
        (() => {})();
    }
    setData(changingArray);
  }, [choosedDiam, typeWater]);

  return (
    <div className={style.page}>
      <input placeholder="Название продукта..."></input>
      <div className={style.chooseType}>
        <div className={style.chooseBlock}>
          <div className={style.lineGray}>
            <p>ДИАМЕТР ГОРЛЫШКА (мм)</p>
          </div>
          <div
            style={{ flexDirection: "row", paddingLeft: "20px" }}
            className={style.blockChase}
          >
            <Type currentType={choosedDiam} setType={setDiam} type="Все" />
            <Type currentType={choosedDiam} setType={setDiam} type="28" />
            <Type currentType={choosedDiam} setType={setDiam} type="38" />
            <Type currentType={choosedDiam} setType={setDiam} type="48" />
          </div>
        </div>
        <div className={style.chooseBlock}>
          <div className={style.lineGray}>
            <p>ТИП ЖИДКОСТИ</p>
          </div>
          <div style={{ flexDirection: "column" }} className={style.blockChase}>
            <Type currentType={typeWater} setType={setWater} type="Все" />
            <Type
              currentType={typeWater}
              setType={setWater}
              type="Молоко и молочная продукция"
            />
            <Type
              currentType={typeWater}
              setType={setWater}
              type="Соки, фреши и смузи"
            />
            <Type
              currentType={typeWater}
              setType={setWater}
              type="Безалкогольная и алкогольная продукция"
            />
            <Type
              currentType={typeWater}
              setType={setWater}
              type="Подсолнечное масло, уксус"
            />
            <Type
              currentType={typeWater}
              setType={setWater}
              type="Косметика и фармацевтика"
            />
            <Type
              currentType={typeWater}
              setType={setWater}
              type="Технические жидкости"
            />
          </div>
        </div>
      </div>
      {filteredData.map(
        (el, index) =>
          el.items.length > 0 && (
            <div style={{ position: "relative" }} key={index}>
              <div className={style.litrageBlock}>
                <h3>{el.litrage}</h3>
              </div>
              <div className={style.itemBlock}>
                {el.items.map((elementItem, indexSecond) => {
                  return (
                    <div
                      ref={(refBlock) => {
                        arrayRefs.push(refBlock);
                      }}
                      key={indexSecond}
                      style={{ minHeight: maxState + 2 }}
                      className={style.linkItem}
                    >
                      <Item widthed={maxState + 2} elementItem={elementItem} />
                    </div>
                  );
                })}
              </div>
            </div>
          )
      )}
    </div>
  );
};
