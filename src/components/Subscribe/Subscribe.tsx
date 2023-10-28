import React, { useState } from "react";
import st from "./Subscribe.module.scss";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import strawbarry from "../../assets/strawberry_bg.png";
import mail from "../../assets/mail_bg.png";
import ButtonOrange from "../ui/button/ButtonOrange/ButtonOrange";
import Input from "../ui/input/Input/Input";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <BoundingContainer className={st.subscribe}>
      <div className={`${st.subscribe__item} ${st.subscribe__new}`}>
        <div className={st.subscribe__new__head}>Новое в нашем блоге</div>
        <a className={st.subscribe__new__url} href="#">
          10 способов сервировки фруктовых щербетов к столу
        </a>
        <img src={strawbarry} alt="" />
      </div>
      <div className={`${st.subscribe__item} ${st.subscribe__sub}`}>
        <img src={mail} alt="" />
        <div className={st.subscribe__sub__body}>
          <div className={st.subscribe__sub__desc}>
            Подпишитесь на нашу сладкую рассылку и будьте всегда в курсе всего
            самого вкусного, что у нас происходит. Обещаем не спамить и не слать
            всякой ненужной ерунды. Честно =)
          </div>
          <div className={st.subscribe__sub__options}>
            <Input
              value={email}
              onChange={changeEmail}
              placeholder="email@example.com"
              className={st.subscribe__sub__input}
            />
            <ButtonOrange>Отправить</ButtonOrange>
          </div>
        </div>
      </div>
    </BoundingContainer>
  );
};

export default Subscribe;
