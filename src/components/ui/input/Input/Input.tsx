import React, { FC } from "react";
import st from "./Input.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<Props> = ({ className, ...props }) => {
  return <input className={`${st.input} ${className}`} {...props} />;
};

export default Input;
