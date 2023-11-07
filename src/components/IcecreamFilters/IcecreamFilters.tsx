import React from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./IcecreamFilters.module.scss";
import FilterContainer from "../ui/filters/filterContaner/FilterContainer";
import Sorted from "./Sorted/Sorted";
import RadioRound from "../ui/input/RadioRound/RadioRound";

const IcecreamFilters = () => {
  return (
    <BoundingContainer className={st.filters}>
      <div className={st.up}>
        <FilterContainer head={"Сортировка:"}>
          <Sorted />
        </FilterContainer>
        <RadioRound />
      </div>
    </BoundingContainer>
  );
};

export default IcecreamFilters;
