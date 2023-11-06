import { Link } from "react-router-dom";
import st from "./Mylink.module.scss";
import React, { FC } from "react";
interface Props {
  to: string;
  text: string;
}

const MyLink: FC<Props> = ({ to, text }) => {
  return (
    <Link className={st.link} to={to}>
      <span className={st.link__text}>{text}</span>
    </Link>
  );
};

export default MyLink;
