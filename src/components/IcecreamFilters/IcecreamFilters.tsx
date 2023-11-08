import React from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./IcecreamFilters.module.scss";
import FilterContainer from "../ui/filters/filterContaner/FilterContainer";
import Sorted from "./Sorted/Sorted";
import RadioRound from "../ui/input/RadioRound/RadioRound";
import FatContent from "./Fatcontent/FatContent";
import Fillres from "./Fillers/Fillres";

const IcecreamFilters = () => {
  return (
    <BoundingContainer className={st.filters}>
      <Sorted />
      <FatContent />
      <Fillres />
    </BoundingContainer>
  );
};

export default IcecreamFilters;
