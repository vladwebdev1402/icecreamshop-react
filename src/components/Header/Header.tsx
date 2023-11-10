import React, { FC } from "react";
import { Link } from "react-router-dom";
import st from "./Header.module.scss";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import logo from "../../assets/logo.svg";
import basket from "../../assets/header/basket.svg";
import ButtonWhite from "../ui/button/ButtonWhite/ButtonWhite";
import DropdownLink from "./DropdownLink/DropdownLink";
import MyLink from "../ui/link/MyLink";
import { routes } from "../Router/routes";
import Search from "./Search";
import Login from "./Login";
import Basket from "./Basket/Basket";
const Header: FC = () => {
  return (
    <header className={st.header}>
      <BoundingContainer>
        <div className={st.header__up}>
          <nav>
            <ul className={st.nav}>
              <li className={st.nav__item}>
                <Link to={`/${routes.main}`}>
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li className={st.nav__item}>
                <DropdownLink />
              </li>
              <li className={st.nav__item}>
                <MyLink
                  className={st.link}
                  st__active__link={st.link__active}
                  to={"#"}
                  text="Доставка и оплата"
                />
              </li>
              <li className={st.nav__item}>
                <MyLink
                  className={st.link}
                  st__active__link={st.link__active}
                  to={"#"}
                  text="О компании"
                />
              </li>
            </ul>
          </nav>
          <div className={st.options}>
            <Search />
            <Login />
            <Basket />
          </div>
        </div>
        <div className={st.header__down}>
          <span className={st.time}>с 10 до 20, ежедневно</span>
          <span className={st.number}>8 812 450-25-25</span>
        </div>
      </BoundingContainer>
    </header>
  );
};

export default Header;
