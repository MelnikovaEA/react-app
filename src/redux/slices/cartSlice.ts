import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemOfCart} from "../../appTypes/appTypes";
import { RootState } from "../store.ts";

type CartState = {
    order: ItemOfCart[],
    total: number,
    price: number,
}

const initialState: CartState = {
    order: [],
    total: 0,
    price: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // setOrder: (state, action: PayloadAction<ItemOfCart[]>) => {
        //     state.order = action.payload;
        // },
        setTotal: (state) => {
            state.total = state.order.reduce((num, item) => {
                return num + item.qty;
            }, 0)
        },
        setPrice: (state) => {
            state.price = state.order.reduce((sum, item) => {
                return sum + item.totPrice;
            }, 0)
        },
        addToCart: (state, action: PayloadAction<ItemOfCart>) => {
            const item = state.order.find(item => item.hashId === action.payload.hashId);
            if (item) {
                item.qty++;
                item.totPrice += item.price;
                console.log('Товар обновился: ', action.payload, 'Новый заказ: ', JSON.stringify(state.order));
            } else {
                state.order.push(action.payload)
                console.log('Новый товар добавлен: ', action.payload, 'Новый заказ: ', JSON.stringify(state.order))
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.order = state.order.filter(item => item.hashId !== action.payload)
        },
        incrementQty: (state, action: PayloadAction<string>) => {
            const item = state.order.find(item => item.hashId === action.payload);
            if (item) {
                item.qty++;
                item.totPrice += item.price;
            }
        },
        decrementQty: (state, action: PayloadAction<string>) => {
            const item = state.order.find(item => item.hashId === action.payload);
            if (item && item.qty > 1) {
                item.qty--;
                item.totPrice -= item.price;
            }
        },
        clearCart: (state) => {
            state.order = [];
            state.total = 0;
            state.price = 0;
        }
    }
});

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
export const {
   //setOrder,
    setPrice,
    setTotal,
    addToCart,
    removeFromCart,
    incrementQty,
    decrementQty,
    clearCart
} = cartSlice.actions;