import React, { useState } from "react";
import st from "./Feedback.module.scss";
import ButtonOrange from "../ui/button/ButtonOrange/ButtonOrange";
import ModalWindow from "../ui/modal/ModalWindow";
import Input from "../ui/input/Input/Input";
const Feedback = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mail: "",
    text: "",
  });

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };
  const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, mail: e.target.value });
  };
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, text: e.target.value });
  };

  return (
    <div className={st.feaadback}>
      {modal ? (
        <ModalWindow onClick={() => setModal(false)}>
          <div
            className={st.modal}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            <div className={st.modal__header}>
              <div className={st.modal__name}>Мы обязательно вам ответим!</div>
              <div
                className={st.modal__close}
                onClick={() => {
                  setModal(false);
                }}
              ></div>
            </div>
            <div className={st.modal__body}>
              <Input
                value={form.name}
                placeholder="Имя Фамилия"
                onChange={changeName}
              />
              <Input
                value={form.mail}
                placeholder="email@example.com"
                onChange={changeMail}
              />
              <Input
                value={form.text}
                placeholder="В свмободной форме"
                onChange={changeText}
              />
            </div>
            <ButtonOrange
              className={st.modal__btn}
              onClick={() => setModal(false)}
            >
              Отправить
            </ButtonOrange>
          </div>
        </ModalWindow>
      ) : (
        <></>
      )}

      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c22cec62e7fd0c95add43b5c4f71b513b804e0376f54e1ecaa96505671843ee&amp;source=constructor"
        width="100%"
        height="430"
        frameBorder="0"
      ></iframe>
      <div className={st.feedback__card}>
        <div className={st.feedback__block}>
          <div className={st.feedback__head}>
            Адрес главного офиса и офлайн-магазина:
          </div>
          <div className={st.feedback__info}>
            ул. Большая Конюшенная, 19/8, Санкт-Петербург
          </div>
        </div>
        <div className={st.feedback__block}>
          <div className={st.feedback__head}>Для заказов по телефону:</div>
          <div className={st.feedback__info}>8 812 450-25-25</div>
          <div className={st.feedback__head}>(с 10 до 20 ежедневно)</div>
        </div>
        <ButtonOrange
          className={st.feedback__btn}
          onClick={() => {
            setModal(true);
          }}
        >
          Форма обратной связи
        </ButtonOrange>
      </div>
    </div>
  );
};

export default Feedback;
