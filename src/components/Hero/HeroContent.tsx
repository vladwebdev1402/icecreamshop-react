import React from "react";
import st from "./Hero.module.scss";
import icecream from "../../assets/icecreams.png";
import ButtonOrange from "../ui/button/ButtonOrange/ButtonOrange";

const HeroContent = () => {
  return (
    <div className={st.content}>
      <div className={st.content__body}>
        <h1 className={st.content__header}>
          Пломбир с помадкой и клубничный щербет
        </h1>
        <ButtonOrange className={st.content__btn}>Давайте оба!</ButtonOrange>
      </div>
      <img src={icecream} />
    </div>
  );
};

export default HeroContent;
