import React, { FC } from "react";
import st from "./ShopItem.module.scss";
import img from "../../assets/items/1.png";
import hot from "../../assets/items/hot.svg";
const ShopItem: FC = () => {
  return (
    <div className={st.item}>
      <div className={st.item__head}>
        <img className={st.item__img} src={img} alt="" />
        <img className={st.item__hot} src={hot} alt="" />
        <div className={st.item__price}>
          310 ₽<span className={st.item__weight}>/кг</span>
        </div>
      </div>

      <div className={st.item__description}>
        Сливочное с апельсиновым джемом и цитрусовой стружкой
      </div>
    </div>
  );
};

export default ShopItem;
