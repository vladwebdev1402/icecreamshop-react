import React, { FC } from "react";
import st from "./Checkbox.module.scss";
import Checkbox from "../../input/Checkbox/Checkbox";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  filters: { name: string; value: string; active: boolean }[];
  setValue: (value: string, active: boolean) => void;
}

const CheckboxFilters: FC<Props> = ({
  filters,
  className = "",
  setValue,
  ...props
}) => {
  return (
    <div className={`${st.filters} ${className}`}>
      {filters.map((filter) => (
        <Checkbox
          key={filter.value}
          setValue={setValue}
          active={filter.active}
          value={filter.value}
        >
          {filter.name}
        </Checkbox>
      ))}
    </div>
  );
};

export default CheckboxFilters;
