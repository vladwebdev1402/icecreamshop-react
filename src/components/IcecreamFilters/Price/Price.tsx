import React, { useState } from "react";
import st from "./Price.module.scss";
import FilterContainer from "../../ui/filters/filterContaner/FilterContainer";
import Range from "../../ui/input/Range/Range";
const min = 0;
const max = 1000;

const Price = () => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  return (
    <FilterContainer head={`Цена: ${minValue} ₽ - ${maxValue} ₽`}>
      <Range
        setMin={setMinValue}
        setMax={setMaxValue}
        min={min}
        max={max}
        maxValue={maxValue}
        minValue={minValue}
      />
    </FilterContainer>
  );
};

export default Price;
