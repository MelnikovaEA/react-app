import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedType: "rating",
    orderType: "asc",
    visible: false,
    activeCategory: '',
    curPageNum: 1,
    inputData: '',
    localInputData: ''
}

const filterSlice = createSlice({
    name: 'filter',
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
        },
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        setCurPageNum: (state, action) => {
            state.curPageNum = action.payload;
        },
        setInputData: (state, action) => {
            state.inputData = action.payload;
        },
        setLocalInputData: (state, action) => {
            state.localInputData = action.payload;
        },
        setQueryData: (state, action) => {
            action.payload.sort && (state.selectedType = action.payload.sort);
            state.activeCategory = action.payload.category;
            state.inputData = action.payload.search;
        }
    }
});

export default filterSlice.reducer;
export const { setActiveCategory, setSelectedType, setOrderType, setVisible, setCurPageNum, setInputData, setLocalInputData, setQueryData  } = filterSlice.actions;