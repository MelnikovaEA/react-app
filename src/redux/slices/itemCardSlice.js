import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: undefined,
    image: "",
    name: "",
    price: 0,
    magic: false,
    clever: false,
    lazy: false,
    strange: false,
}

const cartItemSlice = createSlice({
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

export default cartItemSlice.reducer;
export const { setSelectedType, setExtraProp } = cartItemSlice.actions;