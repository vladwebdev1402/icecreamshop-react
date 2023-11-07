import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useLocation } from "react-router-dom";
import { translateRoutes } from "../../components/Router/routes";
import BoundingContainer from "../../components/ui/container/BoundingContainer/BoundingContainer";
import st from "./CatalogPage.module.scss";
import IcecreamList from "../../components/IcecreamList/IcecreamList";
import IcecreamFilters from "../../components/IcecreamFilters/IcecreamFilters";
const CatalogPage = () => {
  const url = useLocation().pathname.split("/").at(-1);

  return (
    <>
      <Breadcrumbs />

      <BoundingContainer className={st.head}>
        <h1>{translateRoutes[url ?? ""]}</h1>
      </BoundingContainer>
      <IcecreamFilters />
      <IcecreamList />
    </>
  );
};

export default CatalogPage;
