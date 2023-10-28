import React, { FC } from "react";
import BoundingContainer from "../ui/BoundingContainer/BoundingContainer";
import st from "./Hero.module.scss";
import HeroContent from "./HeroContent";
const Hero: FC = () => {
  return (
    <BoundingContainer className={st.hero}>
      <HeroContent />
      <div className={st.themeSwitch}>
        <button className={st.themeSwitch__item}></button>
        <button className={st.themeSwitch__item}></button>
        <button
          className={`${st.themeSwitch__item} ${st.themeSwitch__item_active}`}
        ></button>
      </div>
    </BoundingContainer>
  );
};

export default Hero;
