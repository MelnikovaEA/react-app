import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: ''
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        }
    }
});

export default categorySlice.reducer;
export const {setActiveCategory} = categorySlice.actions;