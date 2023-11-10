import React from "react";
import HiddenBlock from "../../ui/HiddenBlock/HiddenBlock";
import basket from "../../../assets/header/basket.svg";
import basket_active from "../../../assets/header/basket_active.svg";
import st from "./Basket.module.scss";
import BasketItem from "./BasketItem/BasketItem";
import { IBasketItem } from "../../../types/IBasketItem";

const basketItems: IBasketItem[] = [
  {
    id: 0,
    itemId: 0,
    weight: 1.5,
  },
  {
    id: 1,
    itemId: 1,
    weight: 1.5,
  },
];

const Basket = () => {
  return (
    <HiddenBlock
      className={basketItems.length > 0 ? st.basket_with_items : ""}
      st__head__active={`${st.basket__active}`}
      st__btn={st.btn}
      headChild={
        <>
          <div className={st.basket__img}>
            <img className={st.img_notActive} src={basket} />
            <img className={st.img_active} src={basket_active} />
          </div>
          <span className={st.basket__txt}>Корзина</span>
          <span className={st.basket__items__txt}>
            {basketItems.length} товаров
          </span>
        </>
      }
      blockChild={
        <>
          {basketItems.map((item) => (
            <BasketItem key={item.id} item={item} />
          ))}
        </>
      }
    />
  );
};

export default Basket;
