import React, { FC } from "react";
import st from "./ShopItemsContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const ShopItemsContainer: FC<Props> = ({ className, children, ...props }) => {
  return (
    <div className={`${st.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ShopItemsContainer;
