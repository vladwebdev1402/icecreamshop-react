import React, { FC } from "react";
import st from "./Hero.module.scss";
import ButtonOrange from "../ui/button/ButtonOrange/ButtonOrange";

interface Props {
  hero: {
    name: string;
    onClick: () => void;
    img: string;
  };
}

const HeroContent: FC<Props> = ({ hero }) => {
  return (
    <div className={st.content}>
      <div className={st.content__body}>
        <h1 className={st.content__header}>{hero.name}</h1>
        <ButtonOrange className={st.content__btn} onClick={hero.onClick}>
          Давайте оба!
        </ButtonOrange>
      </div>
      <img src={hero.img} />
    </div>
  );
};

export default HeroContent;
