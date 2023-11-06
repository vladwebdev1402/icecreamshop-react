import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { routes } from "../../Router/routes";
import st from "./DropdownLink.module.scss";
const DropdownLink = () => {
  const [open, setOpen] = useState(false);
  const match = useMatch(routes.catalog);
  return (
    <button
      className={`${st.nav__link} ${open ? st.nav__link__open : ""} ${
        match ? st.nav__link__active : ""
      }`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span className={st.nav__text}>Каталог</span>
      {open && (
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
