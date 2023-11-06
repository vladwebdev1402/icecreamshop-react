import React, { FC, useEffect, useState } from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./Hero.module.scss";
import HeroContent from "./HeroContent";
import img1 from "../../assets/hero/icecream1.png";
import img2 from "../../assets/hero/icecream2.png";
import img3 from "../../assets/hero/icecream3.png";
const themes = [0, 1, 2];
const icecreams = [
  {
    name: "Пломбир с помадкой и клубничный щербет",
    img: img1,
    onClick: () => {},
  },
  {
    name: "Шоколадный пломбир и лимонный сорбет",
    img: img2,
    onClick: () => {},
  },
  {
    name: "Крем-брюле и пломбир с малиновым джемом",
    img: img3,
    onClick: () => {},
  },
];

const bodyClassNames = [st.icecream1, st.icecream2, st.icecream3];
const Hero: FC = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.className = bodyClassNames[currentTheme];
  }, [currentTheme]);

  return (
    <BoundingContainer className={st.hero}>
      <HeroContent hero={icecreams[currentTheme]} />
      <div className={st.themeSwitch}>
        {themes.map((theme, idx) => (
          <button
            className={`${st.themeSwitch__item} ${
              theme == currentTheme ? st.themeSwitch__item_active : ""
            }`}
            onClick={() => {
              setCurrentTheme(theme);
            }}
            key={idx}
          ></button>
        ))}
      </div>
    </BoundingContainer>
  );
};

export default Hero;
