import React, { FC } from "react";
import st from "./ShopItem.module.scss";
import hot from "../../assets/items/hot.svg";
import { IShopItem } from "../../types/IShopItem";

interface Props {
  item: IShopItem;
}

const ShopItem: FC<Props> = ({ item }) => {
  return (
    <div className={st.item}>
      <div className={st.item__head}>
        <div className={st.item__img}>
          <img src={item.img} alt="" />
        </div>
        {item.isHot ? (
          <img className={st.item__hot} src={hot} alt="" draggable={false} />
        ) : (
          <></>
        )}
        <div className={st.item__price}>
          {item.price} ₽<span className={st.item__weight}>/кг</span>
        </div>
      </div>

      <div className={st.item__description}>{item.name}</div>
    </div>
  );
};

export default ShopItem;
