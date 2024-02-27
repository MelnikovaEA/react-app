import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemCount: 0,
    selectedType: 0,
    extraProp: [],
}

const itemCardSlice = createSlice({
    name: 'itemCard',
    initialState,
    reducers: {
        setItemCount: (state, action) => {
            state.itemCount = action.payload;
        },
        setSelectedType: (state, action) => {
            state.selectedType = action.payload;
        },
        setExtraProp: (state, action) => {
            state.extraProp = action.payload;
        }
    }
});

export default itemCardSlice.reducer;
export const { setItemCount, setSelectedType, setExtraProp } = itemCardSlice.actions;