import React, { FC } from "react";
import st from "./BasketBody.module.scss";
import { IBasketItem } from "../../../../types/IBasketItem";
import BasketItem from "../BasketItem/BasketItem";
import ButtonOrange from "../../../ui/button/ButtonOrange/ButtonOrange";
import { useAppSelector } from "../../../../hooks/redux";
interface Props {
  basketItems: IBasketItem[];
}
const BasketBody: FC<Props> = ({ basketItems }) => {
  const items = useAppSelector((state) => state.items.value);

  const getAllPrice = (): number => {
    return basketItems.reduce((prev, item) => {
      const shopitem = items.filter((i) => i.id === item.itemId)[0];
      return prev + item.weight * shopitem.price;
    }, 0);
  };
  return (
    <>
      {basketItems.map((item) => (
        <BasketItem key={item.id} item={item} />
      ))}
      <div className={st.basket__divider}></div>
      <div className={st.basket__options}>
        <div className={st.basket__allPrice}>Итого: {getAllPrice()} руб.</div>
        <ButtonOrange className={st.basket__btn}>Оформить заказ</ButtonOrange>
      </div>
    </>
  );
};

export default BasketBody;
