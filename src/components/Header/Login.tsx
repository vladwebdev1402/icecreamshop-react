import React, { useState } from "react";
import HiddenBlock from "../ui/HiddenBlock/HiddenBlock";
import st from "./Header.module.scss";
import stl from "./Login.module.scss";
import Input from "../ui/input/Input/Input";
import ButtonOrange from "../ui/button/ButtonOrange/ButtonOrange";
const Login = () => {
  const [value, setValue] = useState({
    mail: "",
    password: "",
  });

  const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, mail: e.target.value });
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, password: e.target.value });
  };

  return (
    <HiddenBlock
      st__head__active={st.btn_login_active}
      st__btn={st.btn}
      headChild={
        <>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.04 14.88L12.96 9.5L6.04 4.13V7.04H0V11.96H6.04V14.88Z"
              fill="white"
            />
            <path
              d="M18 0H5C4.46957 0 3.96086 0.210714 3.58579 0.585786C3.21071 0.960859 3 1.46957 3 2V4H5V2H18V17H5V15H3V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
              fill="white"
            />
          </svg>
          <span>Вход</span>
        </>
      }
      blockChild={
        <div className={stl.login}>
          <Input
            onChange={changeMail}
            value={value.mail}
            placeholder="email@example.com"
          />
          <Input
            onChange={changePassword}
            value={value.password}
            placeholder="Парооль"
            type="password"
          />
          <div className={stl.login__option}>
            <ButtonOrange>Войти</ButtonOrange>
            <ul className={stl.login__hints}>
              <li className={stl.login__item}>
                <a className={stl.login__link}>Забыли пароль?</a>
              </li>
              <li className={stl.login__item}>
                <a className={stl.login__link}>Новая регистрация</a>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Login;
