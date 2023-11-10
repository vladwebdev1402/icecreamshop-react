import React, { FC } from "react";
import { IBasketItem } from "../../../../types/IBasketItem";
import st from "./BasketItem.module.scss";
import { useAppSelector } from "../../../../hooks/redux";
interface Props {
  item: IBasketItem;
}

const BasketItem: FC<Props> = ({ item }) => {
  const items = useAppSelector((state) => state.items.value);

  const shopItem = items.filter((i) => i.id === item.itemId)[0];
  return (
    <div className={st.item}>
      <button className={st.item__delete}></button>
      <div className={st.item__img}>
        <img src={shopItem.img} alt="" />
      </div>
      <div className={st.item__name}>{shopItem.name}</div>
      <div className={st.item__info}>
        {item.weight} кг х{" "}
        <span className={st.item__info__price}>{shopItem.price} руб.</span>
      </div>
      <div className={st.item__allPrice}>
        {item.weight * shopItem.price} руб.
      </div>
    </div>
  );
};

export default BasketItem;
