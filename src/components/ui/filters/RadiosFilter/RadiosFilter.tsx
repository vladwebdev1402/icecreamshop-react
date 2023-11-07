import React, { FC } from "react";
import st from "./RadiosFilters.module.scss";
import { IFiltersProps } from "../../../../types/IFiltersProps";
import RadioRound from "../../input/RadioRound/RadioRound";

const RadiosFilter: FC<IFiltersProps> = ({
  filters,
  currentValue,
  setValue,
  className = "",
  ...props
}) => {
  return (
    <div className={`${st.filters} ${className}`} {...props}>
      {filters.map((filter) => (
        <RadioRound
          value={filter.value}
          key={filter.value}
          setValue={setValue}
          active={currentValue === filter.value}
        >
          {filter.name}
        </RadioRound>
      ))}
    </div>
  );
};

export default RadiosFilter;
