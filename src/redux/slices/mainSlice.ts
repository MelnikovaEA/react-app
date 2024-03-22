import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../../appTypes/appTypes";

export type Items = Item[];

const initialState = {
    items: [],
    pagesQty: 0,
    status: 'loading',
    error: '',
    errorStatus: ''
}

export const fetchDataAction = createAsyncThunk('main/fetchDataFromDB', async (x: string, {rejectWithValue}) => {
    try {
        const res = await axios.get(x);
        const data = res.data;
        const header = res.headers['x-total-count']; // Получаем заголовок X-Total-Count
        return {data, header}
    } catch (error) {
        const message = error.message;
        const errorStatus = error.response.status;
        return rejectWithValue({message, errorStatus})
    }
})

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        // setItems: (state, action) => {
        //     state.items = action.payload;
        // },
        // setPagesQty: (state, action) => {
        //     state.pagesQty = action.payload;
        // },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchDataAction.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchDataAction.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload.data
            state.pagesQty = Math.ceil(action.payload.header / 8);// Предполагается, что на каждой странице 8 элементов
        })
        builder.addCase(fetchDataAction.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'error'
            state.error = action.payload.message;
            state.errorStatus = action.payload.errorStatus;
            state.items = []
        })
    }
});

export const selectMain = (store) => store.main;

export default mainSlice.reducer;
//export const {setItems, setPagesQty} = mainSlice.actions;