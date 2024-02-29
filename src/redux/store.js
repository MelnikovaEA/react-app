import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "./slices/filterSlice";
import mainReducer from "./slices/mainSlice";
import itemCardReducer from "./slices/itemCardSlice"

const store = configureStore({
    reducer: {
        main: mainReducer,
        filter: filterReducer,
        itemCard: itemCardReducer
    },
});

export default store;