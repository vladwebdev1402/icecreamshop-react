import React, { useRef } from "react";
import { Link, useMatch } from "react-router-dom";
import { routes } from "../../Router/routes";
import st from "./DropdownLink.module.scss";
import { useClose } from "../../../hooks/useClose";
const DropdownLink = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isVisible, setIsVisible } = useClose(ref);
  const match = useMatch(routes.catalog);
  return (
    <button
      className={`${st.nav__link} ${isVisible ? st.nav__link__open : ""} ${
        match ? st.nav__link__active : ""
      }`}
      onClick={() => {
        setIsVisible(!isVisible);
      }}
      ref={ref}
    >
      <span className={st.nav__text}>Каталог</span>
      {isVisible && (
        <div className={st.nav__body}>
          <Link className={st.nav__link__item} to={routes.creamy}>
            Сливочное
          </Link>
          <Link className={st.nav__link__item} to={routes.sherbet}>
            Щербеты
          </Link>
          <Link className={st.nav__link__item} to={routes.ice}>
            Фруктовый лед
          </Link>
          <Link className={st.nav__link__item} to={routes.melorin}>
            Мелорин
          </Link>
        </div>
      )}
    </button>
  );
};

export default DropdownLink;
