import React, { FC, useState, useRef } from "react";
import st from "./HiddenBlock.module.scss";
import ButtonWhite from "../button/ButtonWhite/ButtonWhite";
import { useClose } from "../../../hooks/useClose";
interface Props {
  st__head__active?: string;
  st__btn?: string;
  headChild: React.ReactNode;
  blockChild: React.ReactNode;
  className?: string;
}
const HiddenBlock: FC<Props> = ({
  st__head__active = "",
  headChild,
  blockChild,
  st__btn = "",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, setIsVisible } = useClose(ref);
  return (
    <div className={`${st.block} ${className}`} ref={ref}>
      <ButtonWhite
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className={`${isVisible ? st__head__active : ""} ${st__btn}`}
      >
        {headChild}
      </ButtonWhite>
      {isVisible && <div className={st.block__child}>{blockChild}</div>}
    </div>
  );
};

export default HiddenBlock;
