import React, { FC } from "react";
import st from "./ButtonOrange.module.scss";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const ButtonOrange: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={`${st.btn} ${className}`} {...props}>
      <span className={st.btn__text}>{children}</span>
    </button>
  );
};

export default ButtonOrange;
