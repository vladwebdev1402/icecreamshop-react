import React from "react";
import { useLocation } from "react-router-dom";
import arrow from "../../assets/breadcrumbs/arrow.svg";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import { routes } from "../Router/routes";
import MyLink from "../ui/link/MyLink";
import st from "./Breadcrums.module.scss";
const translateRoutes: { [index: string]: string } = {
  catalog: "Каталог",
  sherbet: "Щербет",
  creamy: "Сливочное морожение",
  ice: "Фруктовый лёд",
  melorin: "Мелорин",
};

const Breadcrumbs = () => {
  const location = useLocation().pathname.split("/").slice(1);
  let url = "";
  return (
    <BoundingContainer className={st.breadcrumbs}>
      <MyLink to={routes.main} text={"Главная"} />
      {location.map((link) => {
        url += "/" + link;
        return (
          <>
            <img className={st.breadcrumbs__arrow} src={arrow} />
            <MyLink
              st__active__link={st.link__active}
              key={url}
              to={url}
              text={translateRoutes[link]}
            />
          </>
        );
      })}
    </BoundingContainer>
  );
};

export default Breadcrumbs;
