import React, { FC } from "react";
import st from "./Header.module.scss";
import BoundingContainer from "../ui/BoundingContainer/BoundingContainer";
import logo from "../../assets/logo.svg";
import basket from "../../assets/header/basket.svg";
import login from "../../assets/header/log_in.svg";
import search from "../../assets/header/search.svg";
import ButtonWhite from "../ui/button/ButtonWhite/ButtonWhite";
const Header: FC = () => {
  return (
    <header className={st.header}>
      <BoundingContainer>
        <div className={st.header__up}>
          <nav>
            <ul className={st.nav}>
              <li className={st.nav__item}>
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </li>
              <li className={st.nav__item}>
                <a className={st.nav__link} href="#">
                  Каталог
                </a>
              </li>
              <li className={st.nav__item}>
                <a className={st.nav__link} href="#">
                  Доставка и оплата
                </a>
              </li>
              <li className={st.nav__item}>
                <a className={st.nav__link} href="#">
                  О компании
                </a>
              </li>
            </ul>
          </nav>
          <div className={st.options}>
            <ButtonWhite className={st.btn_seacrh}>
              <img src={search} alt="search" />
            </ButtonWhite>
            <ButtonWhite className={st.btn}>
              <img src={login} alt="login" />
              <span>Вход</span>
            </ButtonWhite>
            <ButtonWhite className={st.btn}>
              <img src={basket} alt="basket" />
              <span>Корзина</span>
            </ButtonWhite>
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
