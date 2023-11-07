import React, { useState } from "react";
import FilterContainer from "../../ui/filters/filterContaner/FilterContainer";
import RadiosFilter from "../../ui/filters/RadiosFilter/RadiosFilter";

const filters = [
  {
    name: "0%",
    value: "0",
  },
  {
    name: "до 10%",
    value: "10",
  },
  {
    name: "до 30%",
    value: "30",
  },
  {
    name: "выше 30",
    value: "100",
  },
];

const FatContent = () => {
  const [currentValue, setCurrentValue] = useState(filters[0].value);

  const setValue = (value: string) => {
    setCurrentValue(value);
  };
  return (
    <FilterContainer head="Жирность:">
      <RadiosFilter
        setValue={setValue}
        currentValue={currentValue}
        filters={filters}
      />
    </FilterContainer>
  );
};

export default FatContent;
