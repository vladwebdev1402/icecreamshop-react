import React, { FC } from "react";
import st from "./BoundingContainer.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const BoundingContainer: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} ${st.container}`} {...props}>
      {children}
    </div>
  );
};

export default BoundingContainer;
