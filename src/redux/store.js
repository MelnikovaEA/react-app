import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "./slices/filterSlice";
import mainReducer from "./slices/mainSlice";
import cartReducer from "./slices/cartSlice"

const store = configureStore({
    reducer: {
        main: mainReducer,
        filter: filterReducer,
        cart: cartReducer
    },
});

export default store;