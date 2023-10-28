import React, { FC } from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./About.module.scss";
import leaf from "../../assets/about/leaf.svg";
import cow from "../../assets/about/cow.svg";
import thermometer from "../../assets/about/thermometer.svg";
import icecream from "../../assets/about/icecream.svg";
const About: FC = () => {
  return (
    <BoundingContainer>
      <div className={st.about}>
        <div className={st.about__head}>
          Магазин Глэйси – это онлайн и офлайн-магазин по продаже мороженого
          собственного производства на развес
        </div>
        <ul className={st.about__list}>
          <li className={st.about__item}>
            <img src={icecream} alt="" />
            <div className={st.about__item__desc}>
              Все наше мороженое изготавливается на собственном производстве, с
              использованием современного оборудования и проверенных временем
              технологий.
            </div>
          </li>
          <li className={st.about__item}>
            <img src={cow} alt="" />
            <div className={st.about__item__desc}>
              Закупка ингредиентов производится только у проверенных фермерских
              хозяйств и компаний, с которыми нас связывает долговременное
              сотрудничество.
            </div>
          </li>
          <li className={st.about__item}>
            <img src={leaf} alt="" />
            <div className={st.about__item__desc}>
              Для приготовления мороженого используются настоящие сливки и
              молоко высочайшего качества. Все дополнительные ингредиенты и
              добавки произведены из натурального, экологически чистого сырья.
            </div>
          </li>
          <li className={st.about__item}>
            <img src={thermometer} alt="" />
            <div className={st.about__item__desc}>
              Доставка нашего мороженого до заказчиков осуществляется в
              специальном термопаке, который не дает мороженому растаять в пути
              и позволяет сохранить превосходный вкус.
            </div>
          </li>
        </ul>
      </div>
    </BoundingContainer>
  );
};

export default About;
