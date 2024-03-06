import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    order: [],
    total: 0,
    price: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload;
        },
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
        addToCart: (state, action) => {
            const item = state.order.find(item => item.hashId === action.payload.hashId);
            if (item) {
                item.qty++;
                item.totPrice += item.price;
                console.log('Товар обновился: ',action.payload, 'Новый заказ: ', JSON.stringify(state.order));
            } else {
                state.order.push(action.payload)
                console.log('Новый товар добавлен: ', action.payload, 'Новый заказ: ', JSON.stringify(state.order))
            }
        },
        removeFromCart: (state, action) => {
            state.order = state.order.filter(item => item.hashId !== action.payload)
        },
        incrementQty: (state, action) => {
            const item = state.order.find(item => item.hashId === action.payload);
            item.qty++;
            item.totPrice += item.price;
        },
        decrementQty: (state, action) => {
            const item = state.order.find(item => item.hashId === action.payload);
            if (item.qty > 1) {
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

export default cartSlice.reducer;
export const {setOrder, setPrice, setTotal, addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;