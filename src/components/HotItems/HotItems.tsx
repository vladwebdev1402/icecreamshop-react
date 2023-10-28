import React from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./HotItems.module.scss";
import ShopItemsContainer from "../ui/container/ShopItemsContainer/ShopItemsContainer";
import ShopItem from "../ShopItem/ShopItem";
const HotItems = () => {
  return (
    <BoundingContainer className={st.hotItems}>
      <ShopItemsContainer>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ShopItemsContainer>
    </BoundingContainer>
  );
};

export default HotItems;
