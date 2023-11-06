import React, { FC, useState } from "react";
import st from "./HiddenBlock.module.scss";
import ButtonWhite from "../button/ButtonWhite/ButtonWhite";
interface Props {
  st__head__active: string;
  st__btn?: string;
  headChild: React.ReactNode;
  blockChild: React.ReactNode;
}
const HiddenBlock: FC<Props> = ({
  st__head__active,
  headChild,
  blockChild,
  st__btn = "",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={st.block}>
      <ButtonWhite
        onClick={() => {
          setOpen(!open);
        }}
        className={`${open ? st__head__active : ""} ${st__btn}`}
      >
        {headChild}
      </ButtonWhite>
      {open && <div className={st.block__child}>{blockChild}</div>}
    </div>
  );
};

export default HiddenBlock;
