import React, { useRef, useState, useEffect, FC } from "react";
import st from "./Range.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  max: number;
  min: number;
  maxValue: number;
  minValue: number;
  setMax: (value: number) => void;
  setMin: (value: number) => void;
}
const Range: FC<Props> = ({
  max,
  min,
  maxValue,
  minValue,
  setMax,
  setMin,
  className = "",
  ...props
}) => {
  const leftControl = useRef<HTMLDivElement>(null);
  const rightControl = useRef<HTMLDivElement>(null);
  const outherLine = useRef<HTMLDivElement>(null);
  const currentControl = useRef<HTMLDivElement>();
  const innerLine = useRef<HTMLDivElement>(null);

  const currentCursorPos = useRef<number>(0);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [outher, setOuther] = useState({
    width: "100%",
    left: "0px",
  });

  // цена одного пикселя
  const calcScale = (): number => {
    return max / innerLine.current!.clientWidth;
  };

  const handleMinChange = (pos: number) => {
    const value =
      Math.ceil(calcScale() * pos) < min ? min : Math.ceil(calcScale() * pos);
    const newMinVal = Math.min(value, maxValue);
    setMin(newMinVal);
  };
  const handleMaxChange = (pos: number) => {
    const value =
      Math.ceil(calcScale() * pos) > max ? max : Math.ceil(calcScale() * pos);
    const newMaxVal = Math.max(value, minValue);
    setMax(newMaxVal);
  };

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    currentControl.current = e.target as HTMLDivElement;
    currentCursorPos.current = e.clientX;
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e: MouseEvent) => {
    if (currentControl.current === leftControl.current) {
      const pos = left + e.clientX - currentCursorPos.current;
      if (pos >= -3 && innerLine.current!.clientWidth - pos - 40 > right) {
        handleMinChange(pos);
        setLeft(pos);
      }
    } else {
      const pos = right + currentCursorPos.current - e.clientX;
      if (pos >= -3 && innerLine.current!.clientWidth - pos - 40 > left) {
        handleMaxChange(innerLine.current!.clientWidth - pos);
        setRight(pos);
      }
    }
  };

  const setStylesOutherLine = () => {
    const rectleft = leftControl.current!.getBoundingClientRect().left;
    const rectright = rightControl.current!.getBoundingClientRect().left;
    setOuther({
      width: `${rectright - rectleft + 10}px`,
      left: `${left}px`,
    });
  };

  const mouseUp = () => {
    window.removeEventListener("mousemove", mouseMove);
  };

  useEffect(() => {
    setStylesOutherLine();
  }, [left, right]);

  return (
    <div className={`${st.range} ${className}`} {...props}>
      <div className={st.range__innerLine} ref={innerLine}>
        <div
          className={`${st.range__control}`}
          style={{ left: `${left}px` }}
          ref={leftControl}
          onMouseDown={mouseDown}
        ></div>
        <div
          className={st.outher__line}
          ref={outherLine}
          style={{ ...outher }}
        ></div>
        <div
          className={`${st.range__control}`}
          style={{ right: `${right}px` }}
          onMouseDown={mouseDown}
          ref={rightControl}
        ></div>
      </div>
    </div>
  );
};

export default Range;
