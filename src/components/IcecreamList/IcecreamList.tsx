import React from "react";
import BoundingContainer from "../ui/container/BoundingContainer/BoundingContainer";
import ShopItemsContainer from "../ui/container/ShopItemsContainer/ShopItemsContainer";
import { useAppSelector } from "../../hooks/redux";
import ShopItem from "../ShopItem/ShopItem";
import st from "./IcecreamList.module.scss";

const IcecreamList = () => {
  const items = useAppSelector((state) => state.items.value);

  return (
    <BoundingContainer className={st.list}>
      <ShopItemsContainer>
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </ShopItemsContainer>
    </BoundingContainer>
  );
};

export default IcecreamList;
