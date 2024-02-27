import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from "./slices/categorySlice";
import sortReducer from "./slices/sortSlice";
import searchReducer from "./slices/searchSlice";
import mainReducer from "./slices/mainSlice";
import itemCardReducer from "./slices/itemCardSlice"

const store = configureStore({
    reducer: {
        main: mainReducer,
        category: categoryReducer,
        sort: sortReducer,
        search: searchReducer,
        itemCard: itemCardReducer
    },
});

export default store;