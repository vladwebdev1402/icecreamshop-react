import React, { FC, useState, useRef } from "react";
import st from "./DropdownFilters.module.scss";
import { IFiltersProps } from "../../../../types/IFiltersProps";
import { useClose } from "../../../../hooks/useClose";

const DropdownFilter: FC<IFiltersProps> = ({
  filters,
  currentValue,
  setValue,
  className = "",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, setIsVisible } = useClose(ref);
  const clickOpen = () => {
    setIsVisible(!isVisible);
  };

  const clickFilter = (value: string) => {
    setIsVisible(!isVisible);
    setValue(value);
  };

  return (
    <div className={`${st.filter} ${className}`} {...props} ref={ref}>
      <div
        className={`${st.filter__current} ${
          isVisible ? st.filter__current_open : ""
        }`}
        onClick={clickOpen}
      >
        {filters.filter((filter) => filter.value === currentValue)[0].name}
      </div>
      {isVisible && (
        <div className={st.filter__body}>
          {filters.map((filter, idx) => (
            <div
              key={idx}
              className={`${st.filter__item} ${
                filter.value == currentValue ? st.filter__item_active : ""
              }`}
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
