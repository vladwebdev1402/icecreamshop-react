import React, { useState } from "react";
import FilterContainer from "../../ui/filters/filterContaner/FilterContainer";
import CheckboxFilters from "../../ui/filters/ChekboxFilters/CheckboxFilters";

const filtersArray = [
  {
    name: "шоколадные",
    value: "шоколадные",
    active: false,
  },
  {
    name: "сахарные присыпки",
    value: "сахарные присыпки",
    active: false,
  },
  {
    name: "фрукты",
    value: "фрукты",
    active: false,
  },
  {
    name: "сиропы",
    value: "сиропы",
    active: false,
  },
  {
    name: "джемы",
    value: "джемы",
    active: false,
  },
];

const Fillres = () => {
  const [filters, setFilters] = useState(filtersArray);
  const setValue = (value: string, active: boolean) => {
    setFilters(
      filters.map((filter) =>
        filter.value === value ? { ...filter, active: active } : { ...filter }
      )
    );
  };
  return (
    <FilterContainer head="Наполнители:">
      <CheckboxFilters setValue={setValue} filters={filters} />
    </FilterContainer>
  );
};

export default Fillres;
