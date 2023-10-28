import React, { FC } from "react";
import st from "./ButtonWhite.module.scss";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {}
const ButtonWhite: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={`${st.btn} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonWhite;
