import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    pagesQty: 2,
    isLoading: true
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setPagesQty: (state, action) => {
            state.pagesQty = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },

    }
});

export default mainSlice.reducer;
export const { setItems, setPagesQty, setIsLoading } = mainSlice.actions;