import React from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./Footer.module.scss";
import facebook from "../../assets/footer/facebook.svg";
import b from "../../assets/footer/b.svg";
import inst from "../../assets/footer/inst.svg";
import twitter from "../../assets/footer/twitter.svg";
import heart from "../../assets/footer/heart.svg";
const Footer = () => {
  return (
    <footer className={st.footer}>
      <BoundingContainer className={st.footer__container}>
        <ul className={st.footer__social}>
          <li className={st.footer__item}>
            <a className={st.footer__social__link} href="#">
              <img src={facebook} draggable={false} alt="facebook" />
            </a>
          </li>
          <li className={st.footer__item}>
            <a className={st.footer__social__link} href="#">
              <img src={b} draggable={false} alt="b" />
            </a>
          </li>
          <li className={st.footer__item}>
            <a className={st.footer__social__link} href="#">
              <img src={inst} draggable={false} alt="inst" />
            </a>
          </li>
          <li className={st.footer__item}>
            <a className={st.footer__social__link} href="#">
              <img src={twitter} draggable={false} alt="twitter" />
            </a>
          </li>
        </ul>
        <ul className={st.footer__links}>
          <li className={st.footer__link__item}>
            <img src={heart} />
            <a className={st.footer__link} href="#">
              Для поставщиков
            </a>
          </li>
          <li className={st.footer__link__item}>
            <a className={st.footer__link} href="#">
              Наши документы
            </a>
          </li>
          <li className={st.footer__link__item}>
            <a className={st.footer__link} href="#">
              О производстве
            </a>
          </li>
          <li className={st.footer__link__item}>
            <a className={st.footer__link} href="#">
              Экологические стандарты
            </a>
          </li>
        </ul>
      </BoundingContainer>
    </footer>
  );
};

export default Footer;
