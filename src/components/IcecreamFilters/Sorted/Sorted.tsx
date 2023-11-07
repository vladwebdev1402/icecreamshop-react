import React, { useState } from "react";
import DropdownFilter from "../../ui/filters/DropdownFilter/DropdownFilter";

const filters = [
  {
    name: "По популярности",
    value: "popular",
  },
  {
    name: "По убыванию",
    value: "decreasing",
  },
  {
    name: "По возрастанию",
    value: "increase",
  },
  {
    name: "По жирности",
    value: "fat content",
  },
];

const Sorted = () => {
  const [currentValue, setCurrentValue] = useState(filters[0].value);

  return (
    <DropdownFilter
      setValue={setCurrentValue}
      currentValue={currentValue}
      filters={filters}
    />
  );
};

export default Sorted;
