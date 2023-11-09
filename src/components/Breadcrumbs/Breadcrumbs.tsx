import React from "react";
import { useLocation } from "react-router-dom";
import arrow from "../../assets/breadcrumbs/arrow.svg";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import { routes, translateRoutes } from "../Router/routes";
import MyLink from "../ui/link/MyLink";
import st from "./Breadcrums.module.scss";

const Breadcrumbs = () => {
  const location = useLocation().pathname.split("/").slice(2);
  let url = `/${routes.root}`;
  return (
    <BoundingContainer className={st.breadcrumbs}>
      <MyLink to={`/${routes.main}`} text={"Главная"} />
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
