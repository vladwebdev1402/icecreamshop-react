import React, { FC, useEffect } from "react";
import st from "./ModalWindow.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ModalWindow: FC<Props> = ({ children, className, ...props }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.className += ` ${st.modal_open}`;

    return () => {
      body.className = body.className.replace(` ${st.modal_open}`, "");
    };
  }, []);

  return (
    <div className={`${st.modal} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ModalWindow;
