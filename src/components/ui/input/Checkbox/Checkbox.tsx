import React, { FC } from "react";
import st from "./Checkbox.module.scss";

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  setValue: (value: string, active: boolean) => void;
  value: string;
  active: boolean;
}

const Checkbox: FC<Props> = ({
  setValue,
  active,
  value,
  children,
  className = "",
  ...props
}) => {
  const onChange = () => {
    setValue(value, !active);
  };

  return (
    <label className={`${st.radio} ${className}`} {...props}>
      <input type="checkbox" checked={active} onChange={onChange} />
      <span />
      {children}
    </label>
  );
};

export default Checkbox;
