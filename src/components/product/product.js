import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { Item } from "./item/item";
import { ItemPage } from "./itemPage/itemPage";
import style from "./product.module.css";
import { Type } from "./types/type";

export const Product = () => {
  const [choosedDiam, setDiam] = useState("Все");
  const [typeWater, setWater] = useState("Все");
  let { path, url } = useRouteMatch();

  const [filteredData, setData] = useState([]);

  useEffect(() => {
    let changingArray = [
      {
        litrage: "0.5 Л.",
        items: [
          {
            id: 0,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для безалкогольной и алкогольной продукции",
            diametr: "28 мм",
            flags: ["alcohool", "fresh"],
            cost: 20,
          },

          {
            id: 1,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для молока",
            diametr: "48 мм",
            flags: ["milk"],
            cost: 6,
          },
          {
            id: 2,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для соков",
            diametr: "38 мм",
            flags: ["fresh"],
            cost: 6,
          },
          {
            id: 3,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для молока",
            diametr: "28 мм",
            flags: ["milk"],
            cost: 6,
          },
          {
            id: 4,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для тех жидкостей",
            diametr: "38 мм",
            flags: ["teh"],
            cost: 6,
          },
        ],
      },
      {
        litrage: "1.0 Л.",
        items: [
          {
            id: 5,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для молока",
            diametr: "38 мм",
            flags: ["milk"],
            cost: 6,
          },

          {
            id: 6,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для технических жидкостей",
            diametr: "48 мм",
            flags: ["teh"],
            cost: 6,
          },
          {
            id: 7,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для молока",
            diametr: "28 мм",
            flags: ["milk"],
            cost: 6,
          },
        ],
      },
      {
        litrage: "1.5 Л.",
        items: [
          {
            id: 8,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для уксуса",
            diametr: "28 мм",
            flags: ["podsoln"],
            cost: 6,
          },

          {
            id: 9,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для молока",
            diametr: "48 мм",
            flags: ["milk"],
            cost: 6,
          },
          {
            id: 10,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для молока",
            diametr: "38 мм",
            flags: ["milk"],
            cost: 6,
          },
          {
            id: 11,
            img: "https://illan-gifts.ru/api/image/767x320-fitnu/butylka-pitevaia-mo8656-06-145749.",
            name: "ПЭТ-бутылка для косметики",
            diametr: "28 мм",
            flags: ["cosmetic"],
            cost: 6,
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
      <Switch>
        <Route exact path={path}>
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
              <div
                style={{ flexDirection: "column" }}
                className={style.blockChase}
              >
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
                    {el.items.map((elementItem, indexSecond) => (
                      <NavLink
                        key={indexSecond}
                        className={style.linkItem}
                        to={`${url}/${elementItem.id}`}
                      >
                        <Item elementItem={elementItem} />
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
          )}
        </Route>
        <Route path={`${path}/:itemId`}>
          <ItemPage
            allItems={filteredData
              .map((el) =>
                el.items.map((elementMas) => ({
                  ...elementMas,
                  litrage: el.litrage,
                }))
              )
              .flat(1)}
          />
        </Route>
      </Switch>
    </div>
  );
};
