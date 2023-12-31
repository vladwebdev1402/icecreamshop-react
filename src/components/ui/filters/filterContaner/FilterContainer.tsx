import React, { FC } from "react";
import st from "./Filter.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  head: string;
  st__filter__body?: string;
}
const FilterContainer: FC<Props> = ({
  head,
  className = "",
  children,
  st__filter__body = "",
  ...props
}) => {
  return (
    <div className={`${st.filter} ${className}}`} {...props}>
      <div className={st.filter__head}>{head}</div>
      <div className={`${st.filter__body} ${st__filter__body}`}>{children}</div>
    </div>
  );
};

export default FilterContainer;
