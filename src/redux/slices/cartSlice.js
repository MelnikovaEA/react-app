import {createSlice} from "@reduxjs/toolkit";
import {checkCart} from "../../utils/renderCart";

const initialState = {
    total: 0,
    price: 0,
    order: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotal: (state) => {
            state.total = state.order.reduce((num, item) => {
                return num + item.qty;
            }, 0)
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setPrice: (state) => {
             state.price = state.order.reduce((sum, item) => {
                return sum + item.totPrice;
            }, 0)
        },
        clearCart: (state) => {
            state.order = [];
            state.total = 0;
            state.price = 0;
        }
    }
});

export default cartSlice.reducer;
export const {setOrder, setPrice, setTotal, clearCart} = cartSlice.actions;