import React, { FC, useState } from "react";
import st from "./DropdownFilters.module.scss";
import { IFiltersProps } from "../../../../types/IFiltersProps";

const DropdownFilter: FC<IFiltersProps> = ({
  filters,
  currentValue,
  setValue,
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const clickOpen = () => {
    setOpen(!open);
  };

  const clickFilter = (value: string) => {
    setOpen(!open);
    setValue(value);
  };

  return (
    <div className={`${st.filter} ${className}`} {...props}>
      <div
        className={`${st.filter__current} ${
          open ? st.filter__current_open : ""
        }`}
        onClick={clickOpen}
      >
        {filters.filter((filter) => filter.value === currentValue)[0].name}
      </div>
      {open && (
        <div className={st.filter__body}>
          {filters
            .filter((filter) => filter.value !== currentValue)
            .map((filter, idx) => (
              <div
                key={idx}
                className={st.filter__item}
                onClick={() => clickFilter(filter.value)}
              >
                {filter.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
