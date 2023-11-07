import React, { FC } from "react";
import st from "./RadioRound.module.scss";
interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  active: boolean;
  setValue: (value: string) => void;
  value: string;
}
const RadioRound: FC<Props> = ({ children, setValue, value, active }) => {
  return (
    <label className={st.radio}>
      <input type="radio" checked={active} onChange={() => setValue(value)} />
      <span></span>
      {children}
    </label>
  );
};

export default RadioRound;
