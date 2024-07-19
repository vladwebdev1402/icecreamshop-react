import { createSlice } from '@reduxjs/toolkit';
import { IShopItem } from '../../types/IShopItem';
import img1 from "../../assets/items/1.webp";
import img2 from "../../assets/items/2.webp";
import img3 from "../../assets/items/3.webp";
import img4 from "../../assets/items/4.webp";
import img5 from "../../assets/items/5.webp";
import img6 from "../../assets/items/6.webp";
import img7 from "../../assets/items/7.webp";
import img8 from "../../assets/items/8.webp";
import img9 from "../../assets/items/9.webp";
import img10 from "../../assets/items/10.webp";
import img11 from "../../assets/items/11.webp";
import img12 from "../../assets/items/12.webp";
interface IItemsState {
    value: IShopItem[];
}

const initialState: IItemsState = {
    value: [
        {
            id: 0,
            name: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
            price: 310,
            img: img1,
            isHot: true,
        },
        {
            id: 1,
            name: "Сливочно-кофейное с кусочками шоколада",
            price: 380,
            img: img2,
            isHot: true,
        },
        {
            id: 2,
            name: "Сливочно-клубничное с присыпкой из белого шоколада",
            price: 355,
            img: img3,
            isHot: true,
        },
        {
            id: 3,
            name: "Сливочное с брусничным джемом",
            price: 415,
            img: img4,
            isHot: true,
        },
        {
            id: 4,
            name: "Сливочно-черничное с цельными ягодами черники ",
            price: 325,
            img: img5,
            isHot: false,
        },
        {
            id: 5,
            name: "Сливочно-лимонное с карамельной присыпкой",
            price: 410,
            img: img6,
            isHot: false,
        },
        {
            id: 6,
            name: "Сливочное с шоколадной стружкой",
            price: 315,
            img: img7,
            isHot: false,
        },
        {
            id: 7,
            name: "Сливочно-ванильное с кусочками шоколада",
            price: 320,
            img: img8,
            isHot: false,
        },
        {
            id: 8,
            name: "Сливочноe с ментоловым сиропом",
            price: 440,
            img: img9,
            isHot: false,
        },
        {
            id: 9,
            name: "Сливочное с кусочками черного шоколада",
            price: 435,
            img: img10,
            isHot: false,
        },
        {
            id: 10,
            name: "Сливочное с мятным сиропом",
            price: 355,
            img: img11,
            isHot: false,
        },
        {
            id: 11,
            name: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
            price: 420,
            img: img12,
            isHot: false,
        },

    ],
}
export const itemsStore = createSlice({
    name: "itemsStore",
    initialState,
    reducers: {
        
    }
})

export default itemsStore.reducer