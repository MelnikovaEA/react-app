import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedType: {name: 'популярности', sortProp: "rating"},
    orderType: "asc",
    visible: false
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSelectedType: (state, action) => {
            state.selectedType = action.payload
        },
        setOrderType: (state, action) => {
            state.orderType = action.payload
        },
        setVisible: (state, action) => {
            state.visible = action.payload
        }
    }
});

export default sortSlice.reducer;
export const { setSelectedType, setOrderType, setVisible } = sortSlice.actions;