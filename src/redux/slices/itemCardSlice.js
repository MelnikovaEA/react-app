import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedType: 0,
    extraProp: [],
}

const itemCardSlice = createSlice({
    name: 'itemCard',
    initialState,
    reducers: {
        setSelectedType: (state, action) => {
            state.selectedType = action.payload;
        },
        setExtraProp: (state, action) => {
            state.extraProp = action.payload;
        }
    }
});

export default itemCardSlice.reducer;
export const { setSelectedType, setExtraProp } = itemCardSlice.actions;