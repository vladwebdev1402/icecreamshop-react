import React from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import st from "./HotItems.module.scss";
import ShopItemsContainer from "../ui/container/ShopItemsContainer/ShopItemsContainer";
import ShopItem from "../ShopItem/ShopItem";
import { useAppSelector } from "../../hooks/redux";
const HotItems = () => {
  const items = useAppSelector((state) => state.items.value);

  return (
    <BoundingContainer className={st.hotItems}>
      <ShopItemsContainer>
        {items
          .filter((item) => item.isHot)
          .slice(0, 4)
          .map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
      </ShopItemsContainer>
    </BoundingContainer>
  );
};

export default HotItems;
