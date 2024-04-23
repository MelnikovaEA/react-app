import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { VariablesKeys } from "../../components/sort/Sort.tsx";

type FilterState = {
    selectedType: VariablesKeys,
    orderType: "asc" | "desc",
    activeCategory: string,
    curPageNum: number,
    inputData: string,
    localInputData: string
}

const initialState: FilterState = {
    selectedType: "rating",
    orderType: "asc",
    activeCategory: '',
    curPageNum: 1,
    inputData: '',
    localInputData: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSelectedType: (state, action: PayloadAction<VariablesKeys>) => {
            state.selectedType = action.payload
        },
        setOrderType: (state, action: PayloadAction<"asc" | "desc">) => {
            state.orderType = action.payload
        },
        setActiveCategory: (state, action: PayloadAction<string>) => {
            state.activeCategory = action.payload;
        },
        setCurPageNum: (state, action: PayloadAction<number>) => {
            state.curPageNum = action.payload;
        },
        setInputData: (state, action: PayloadAction<string>) => {
            state.inputData = action.payload;
        },
        setLocalInputData: (state, action: PayloadAction<string>) => {
            state.localInputData = action.payload;
        },
        setQueryData: (state, action) => {
            action.payload.sort && (state.selectedType = action.payload.sort);
            state.activeCategory = action.payload.category;
            state.inputData = action.payload.search;
        }
    }
});

export const selectFilter = (store: RootState) => store.filter;

export default filterSlice.reducer;
export const { setActiveCategory, setSelectedType, setOrderType, setCurPageNum, setInputData, setLocalInputData, setQueryData  } = filterSlice.actions;