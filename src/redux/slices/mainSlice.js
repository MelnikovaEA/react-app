import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    curPageNum: 1,
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
        setCurPageNum: (state, action) => {
            state.curPageNum = action.payload;
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
export const { setItems, setCurPageNum, setPagesQty, setIsLoading } = mainSlice.actions;