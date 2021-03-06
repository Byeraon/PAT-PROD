import React from "react";
import { NavLink, useRouteMatch, Route, Switch } from "react-router-dom";
import style from "./info.module.css";

import milk from "../../images/info/milk/original.jpg";
import milk_2 from "../../images/info/milk/i.jpg";
import milk_3 from "../../images/info/milk/depositphotos_20055241-stock-photo-bread-with-a-mug-of.jpg";
import milk_4 from "../../images/milkii.jpg";

import fresh from "../../images/info/fresh/5514733-5a7921.jpg";
import fresh_2 from "../../images/info/fresh/1598367517_37.jpg";
import fresh_3 from "../../images/info/fresh/sok-frukty-klubnika-kivi-butylki-napitok-iagody.jpg";
import fresh_4 from "../../images/info/fresh/Svezhevyzhatye-soki-v-magazine.jpg";

import alco from "../../images/info/alco/55443574816263ae7fd1dcddc8.jpg";
import alco_2 from "../../images/info/alco/180402-1.jpg";
import alco_3 from "../../images/info/alco/acf704c4c001f55f06ad70bec2da2937.jpg";
import alco_4 from "../../images/info/alco/727297.jpg";

import oil from "../../images/info/oil/2-3.jpg";
import oil_2 from "../../images/info/oil/nBkSUhL2hFQgnM-_JL6BrNOp2Z318Ji-mifGnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=jyPyxGzNLeDRSNsREpjWnw.jpg";
import oil_3 from "../../images/info/oil/scale12003.jpg";
import oil_4 from "../../images/info/oil/5.jpg";

import cosmetic from "../../images/info/cosmetic/200x50-мл-Frost-бостон-круглая-стеклянная-эфирное-масло-разливочной-с-черный-polyseal-конус.jpg";
import cosmetic_2 from "../../images/info/cosmetic/000024103043.jpg";
import cosmetic_3 from "../../images/info/cosmetic/жидкость-кухни-соскабливая-и-моя-вверх-на-белой-предпосылке-101973282.jpg";
import cosmetic_4 from "../../images/info/cosmetic/48b746899beeecbce6e025a3480g--materialy-dlya-tvorchestva-flakon-pet-150-ml-s-kryshkoj.jpg";

import teh from "../../images/info/teh/38beb3c5-5a7f-4c6e-848f-23a8863c2747_jpg_940x1000_stretch-1_q92.jpg";
import teh_2 from "../../images/info/teh/57glxVr3XPU.jpg";
import teh_3 from "../../images/info/teh/778243343_w1280_h1280_83c1eed5548d6317d8b19a38277c6c05.png";
import teh_4 from "../../images/info/teh/6060084680.jpg";

import caps from "../../images/info/caps/6436aa0c6eadf05cb40f4c2e9a6d6b3c2c180bc5.jpg";
import caps_2 from "../../images/info/caps/375489_plastikovye_izdeliya_dlya_promyshlennosti.jpeg";
import caps_3 from "../../images/info/caps/envatoelements-plastic-water-bottle-on-the-table-plaz3fn.jpg";
import caps_4 from "../../images/info/caps/oil1.jpg";

import forms from "../../images/info/forms/1662x.jpg";
import forms_2 from "../../images/info/forms/istockphoto-464770435-1024x1024.jpg";
import forms_3 from "../../images/info/forms/04-izgotovlenie-form-dlya-litiya.jpg";
import forms_4 from "../../images/info/forms/1a92bb889b659ff10d9b309fc74cffca.jpg";

import { InfoPage } from "./infoPage/infoPage";

export const Info = () => {
  let { path, url } = useRouteMatch();
  const data = [
    {
      id: 0,
      name: "ПЭТ для молочной продукции",
      pageName: "Молоко и молочная продукция",
      img: [milk, milk_2, milk_3, milk_4],
      info: [
        "Несколько лет назад в российских магазинах появился необычный для той поры продукт - молоко в ПЭТ-бутылках, иначе говоря, в пластиковых бутылках. Поначалу казавшееся диковинкой, оно стремительно набирает популярность, как следствие, продажи молочной продукции в ПЭТ-бутылках стабильно растут. Это связано с тем, что именно пластиковые бутылки являются одним из наиболее оптимальных и выгодных видов упаковки для молока. Все виды пластиковых бутылок быстро занимают свою нишу и успешно ее расширяют. Такая тара не бьется, удобна при транспортировке, возможно многократное открывание и закрывание, она прекрасно держит форму, позволяет использовать красочные бумажные и термоусадочные этикетки. Ну а с появлением новых технологий срок хранения молочных продуктов в пластиковых бутылках увеличивается.",
        "ПЭТ обладает целым рядом преимуществ. Одно из них заключается в том, что бутылки, изготовленные из этого материала, прекрасно перерабатываются. Кроме того, продукт внутри такой бутылки можно увидеть, что тоже важно. И наконец, молоко в бутылке воспринимается потребителем, как более традиционный, а значит- более натуральный продукт. Поэтому среди покупателей молоко в ПЭТ- таре пользуется большим спросом. Молоко и другие молочные продукты в ПЭТ-бутылке становятся премиальными товарами, а значит, их можно продавать дороже, увеличивая прибыль.",
        "Молочные продукты в ПЭТ-таре выгодно выделяются на фоне аналогов в традиционных упаковках, следовательно, производителю будет проще привлечь внимание покупателей к своему продукту. И, конечно же, выпуская молоко в ПЭТ-бутылках, вы ставите себя в один ряд с лидерами рынка.",
      ],
      wordsNumber: 37,
      lastWords: "..",
      patchName: "milk",
    },
    {
      id: 1,
      name: "ПЭТ для фрешей и соков",
      pageName: "Фреши и соки",
      img: [fresh, fresh_2, fresh_3, fresh_4],
      info: [
        "Технология горячего розлива особенно широко востребована компаниями, выпускающими плодовоовощные и фруктовые соки, фреши, нектары, сокосодержащие напитки и другие продукты длительного хранения в ПЭТ упаковке. Данное производство предполагает проведение комплекса операций, включая обязательные этапы пастеризации и розлива продукта горячим способом. Сбалансированное воздействие высоких температур позволяет получать безопасный для здоровыя продукт, полезные свойства которого будут сохранены на протяжении всего срока годности. Достоинства розлива в ПЭТ упаковку:",
        "• Обеспечение длительного срока хранения продукта без необходимости добавления консервантов.",
        "• Возможность использования легкой и прочной тары из ПЭТ-материалов, удобство которой высоко ценится потребителями.",
        "• Широкая вариативность дизайнерского оформления ПЭТ упаковки. Производитель может наносить этикетки различных видов, в том числе термоусадочные, хорошо зарекомендовавшие себя еще и в качестве более надежной защиты содержимого от внешних воздействий.",
        "За годы существования данной технологии был разработан ряд решений для эффективного использования ПЭТ-тары:",
        "•Добавление в структуру корпуса тары элементов, повышающих ее устойчивость. Так называемые «лучи» и «пояса», которые часто воспринимают как некий дизайнерский прием, на самом деле служат для предотвращения деформации.",

        "• Оснащение горловины специальными вставками из материалов, устойчивых к плавлению существенно снижает чувствительность к нагреванию",

        "• Укрепление основания тары за счет добавления в структуру «ребер» - элементов, снижающих сопротивляемость материала к тепловому воздействию. В результате основание сохраняет исходную форму.",
        "• Тепловая обработка тары при изготовлении способствует снятию остаточного напряжения, возникающего в структуре материала в процессе выдува. В результате при последующем нагревании в бутылке повторно уже не происходит ослабление молекулярных цепей, и форма сохраняется.",
      ],
      wordsNumber: 37,
      lastWords: "...",
      patchName: "fresh",
    },
    {
      id: 2,
      name: "ПЭТ для алкогольной и безалкогольной продукции",
      pageName: "Алкогольная и безалкогольная продукция",
      img: [alco, alco_2, alco_3, alco_4],
      info: [
        "Компания «ИВЕВРОПЭТ» выдувает ПЭТ-бутылки для воды, лимонада, кваса, безалкогольной и алкогольной продукции , в процессе изготовления которых используется высококачественное и безопасное сырье. Мы производим уникальные продукты объемом от 0,3 до 5,0 литров различных цветов и форм, в том числе стандарта ВPF - горловины этого стандарта имеют высокие показатели газоудержания.",

        "Вся продукция соответствует международным стандартам качества, требованиям безопасности пищевых продуктов.",

        "Тара производится большими и мелкими партиями, хранится на современных просторных складах.",

        "Изготавливаем емкости из преформ, созданных с применением био-гранул Производим емкости стандарта BRC 38 мм. Они отличаются высотой и резьбой горловин.",
      ],
      wordsNumber: 35,
      lastWords: "...",
      patchName: "alcoandnot",
    },
    {
      id: 3,
      name: "ПЭТ для масла и уксуса",
      pageName: "Масло и уксус",
      img: [oil, oil_2, oil_3, oil_4],
      info: [
        "Постепенно вытесняя с рынка стекло, все больше набирает популярность использование пластиковых бутылок для хранения жидкостей. И это вытеснение вполне обосновано, ведь ПЭТ-тара имеет отличные физические характеристики, которые позволяют ей занимать лидирующие позиции в своем сегменте. Из-за своих характеристик ПЭТ-бутылки являются идеальным резервуаром для растительного масла и уксуса.",

        "Какие основные свойства присущи пластиковым бутылкам? ",

        "Высоких показателей позволяет добиваться основной материал для тары — полиэтилентерефталат (ПЭТ).",
        "1. Очень прочный и жесткий продукт.",
        "2. Маленький вес пластика позволяет заказчику экономить на доставке и сократить дополнительные траты на ящики.",
        "3. Сопротивляемость механическому воздействию, в том числе и падению с высоты.",
        "4. Защита от воздействий окружающей среды - повышенной влажности и высоких или низких температур.",
        "5. Из-за своих характеристик ПЭТ-тара не способна впитывать вредоносные запахи из внешней среды.",
        "6. Как известно, уксус - кислота, но для пластика это не проблема, ведь он устойчив к влиянию химических веществ изнутри и извне.",

        "Обратившись в нашу компанию, Вы можете заказать пластиковые бутылки для масла и уксуса любого литража. Мы изготовим продукт высокого качества по низким ценам, соблюдая сроки. Сделать заказ и задать вопросы можно связавшись с нами по контактной информации, указанной на сайте. ",
      ],
      wordsNumber: 35,
      lastWords: "..",
      patchName: "oil",
    },
    {
      id: 4,
      name: "ПЭТ для косметики и химии",
      pageName: "Косметика и химия",
      img: [cosmetic, cosmetic_2, cosmetic_3, cosmetic_4],
      info: [
        "ПЭТ-флаконы выдерживают серьезные механические нагрузки, не бьются и не раздавливаются. Могут использоваться при контакте с агрессивными веществами — кислотами, солями и щелочами, не теряя целостности.",
        "Преимущества ПЭТ-флаконов",
        "Многие годы жидкости и препараты для косметической, фармацевтической и других сфер поставлялись в таре из стекла. Для потребителя это было привычно. Производителям же это крайне неудобно: большой вес изделия увеличивал транспортные расходы. Дополнительно в процессе доставки некоторая часть флаконов попросту разбивалась. Все это приводило к большим издержкам при транспортировке от производителя флаконов к месту расфасовки и последующей отправки до потребителей. На данный момент об этой неприятности можно забыть. Легкий и фактически прозрачный материал является оптимальным решением при производстве надежной тары. Для сравнения, флакон 10 мл весит менее 4 граммов, а флаконы 100 мл имеют вес примерно в 20 раз менье, чем аналогичные стеклянные изделия. Очевидна экономическая выгода от использования.",
        "Из ПЭТ выпускаются и небольшие флаконы 5 мл, но преимущества материала заметнее при производстве более объемной тары — флаконы 200-500 мл",

        "Крошка сырья - полиэтилентерефталата  - изначально прозрачна, соответственно и изготавливаемый ПЭТ-флакон тоже. Это качество применимо при использовании в косметологической промышленности для демонстрации чистоты или цвета продукта, хранимого внутри. Но есть возможность окрашивать изделия в любой другой цвет- это интересно для маркетингового продвижения упаковки. Флакон 200-1000 мл- идеален для шампуней, тоников и других продуктов косметической промышленности.",
      ],
      wordsNumber: 35,
      lastWords: "..",
      patchName: "cosmetic",
    },
    {
      id: 5,
      name: "ПЭТ для технических жидкостей",
      pageName: "Технических жидкостей",
      img: [teh, teh_2, teh_3, teh_4],
      info: [
        "Полиэтилентерефталат-полимерный материал, отличающийся повышенными прочностными качествами. Изделия из ПЭТ выдерживают низкие и высокие температуры. Тара из полиэтилентерефталата обладает химической нейтральностью -емкости не вступают в реакцию с маслами, разбавленными кислотами, бензином, спиртами, эфирами, жирами, минеральными солями, большинством органических соединений, некоторыми растворителями. Данный полимер неустойчив к кетонам, сильным щелочам и кислотам.",
        "Сферы применения",

        "•в нефтепереработке-автомасла, тормозные жидкости;",
        "•в химическом производстве - растворители, антифриз, автокосметика, бытовая химия, моющие вещества, жидкости для розжига;",
        "•на предприятиях, изготавливающих минеральные удобрения — аммиачные растворы, карбидно-аммиачные смеси;",
        "•в организациях, занимающихся разработкой обеззараживающих и моющих средств- антисептики, дезинфицирующие растворы и препараты;",
        "•на заводах по изготовлению смазочных материалов и строительных жидкостей - пластификаторы, гидроизоляционные покрытия, смазки.",

        "Особенности материала изготовления ",

        "ПЭТ бутылкам свойственна стабильность свойств, размеров и формы за счет малой способности материала к водопоглощению. Тара из полиэтилентерефталата устойчива к ударам и растрескиванию. Полимер служит хорошим газовым барьером и практически не поглощает запахи.",

        "Виды технической тары",
        "Среди многообразия изделий, изготавливаемых нашей компанией на основе ПЭТ, для технических жидкостей применяются несколько видов бутылок:",
        "•емкости малых объемов (0,3-2 л)-прочные и светонепроницаемые бутылки с винтовой горловиной. Для закрывания применяются колпачки с контролем первого вскрытия. Бутылка такого назначения может быть: бесцветной, белой, красной, коричневой, зеленой;",
        "•бутылки большого объема (5-10 л) —надежная тара с усиленным дном, специальной ручкой и расширенной горловиной. Бутылка имеет резьбу винтового типа, крышки оснащены специальным кольцом вскрытия. ",
      ],
      wordsNumber: 35,
      lastWords: "...",
      patchName: "technical-liquid",
    },
    {
      id: 6,
      name: "Колпачки и ручки",
      pageName: "Колпачки и ручки",
      img: [caps, caps_2, caps_3, caps_4],
      info: [
        "Эксплуатация пластиковой тары невозможна без использования ПЭТ-колпачков и ручек, которые предоставляют возможность комфортно транспортировать Пэт тару с жидкостью. Для этого используется полиэтилен низкого давления, который характеризуется высокой ударной прочностью и теплостойкостью. Материал разрешен для контакта с пищевыми продуктами, косметическими, медицинскими препаратами и технической жидкостью. Изделие надежно фиксируется на горлышке. Ручка для бутылки не впивается в пальцы. Специальные изгибы повторяют анатомические особенности пальцев и не травмируют их даже при длительном переносе тары. Укупорочная продукция удобна тем, что ее можно многократно открывать и закрывать. Жидкость в пластиковых бутылках с колпачками можно хранить на протяжении всего срока употребления. Колпачки крепятся на горле с помощью винтовой резьбы. Преимущество пластиковых колпачков - в обеспечении герметичности бутылки.",

        " Полимерные колпачки для ПЭТ тары производятся в соответствии со стандартом: ВPF / РCO / Bericap. При этом колпачки делятся на два класса:",

        "Однокомпонентые -выполнены полностью из полиэтилена.",

        "Двухкомпонентные - состоят из комбинации полипропиленового/полиэтиленового колпачка и вкладки из специального пластика.",

        "Компания «Ивевропэт» занимается реализацией ПЭТ-колпачков и ручек для пластиковых бутылок. В нашем ассортименте продукция разных стандартов, размеров и цветовых решений. Свяжитесь с нашими специалистами отдела продаж. Наши сотрудники ответят вам и помогут подобрать оптимальную для вас продукцию.",
      ],
      wordsNumber: 35,
      lastWords: "...",
      patchName: "caps",
    },
    {
      id: 7,
      name: "Пресс формы",
      pageName: "Пресс формы",
      img: [forms, forms_2, forms_3, forms_4],
      info: [
        " Наша компания предлагает полный комплекс работ по изготовлению пресс-форм для ПЭТ тары:",
        "• Создание индивидуального дизайна изделия;",
        "• Изготовление пресс-формы в металле",
        "• Испытание формы и предоставление готового изделия;",

        "Пресс-формы изготавливаются для автоматов и полуавтоматов российских и иностранных производителей. Формы изготавливаются из качественных и сертифицированных материалов. «ИВЕВРОПЭТ» имеет обширный опыт изготовления форм для ПЭТ тары объемом от 0.3 до 10 литров.",
      ],
      wordsNumber: 35,
      lastWords: "...",
      patchName: "forms",
    },
  ];

  return (
    <Switch>
      <Route exact path={path}>
        <div className={style.page}>
          <h2>ПОЛЕЗНО ЗНАТЬ</h2>
          <div className={style.infoBlock}>
            {data.map((el, index) => (
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                key={index}
                to={`${url}/${el.patchName}`}
                className={style.oneBlock}
              >
                <div
                  style={{ backgroundImage: `url(${el.img[0]})` }}
                  className={style.logoBlock}
                ></div>
                <p className={style.textName}>{el.name}</p>
                <p className={style.textInfo}>
                  {el.info[0].split(" ").slice(0, el.wordsNumber).join(" ")}
                  {el.lastWords}
                </p>
              </NavLink>
            ))}
          </div>
        </div>
      </Route>
      <Route path={`${path}/:itemPath`}>
        <InfoPage allItems={data} />
      </Route>
    </Switch>
  );
};
