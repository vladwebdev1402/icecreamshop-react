import { Link, useMatch } from "react-router-dom";
import st from "./Mylink.module.scss";
import React, { FC } from "react";
interface Props {
  className?: string;
  to: string;
  text: string;
  st__active__link?: string;
}

const MyLink: FC<Props> = ({
  className = "",
  to,
  text,
  st__active__link = "",
}) => {
  const match = useMatch(to);
  return (
    <Link
      className={`${st.link} ${className} ${match ? st__active__link : ""}`}
      to={to}
    >
      <span className={st.link__text}>{text}</span>
    </Link>
  );
};

export default MyLink;
