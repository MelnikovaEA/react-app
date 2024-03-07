import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    pagesQty: 0,
    status: 'loading',
    error: ''
}

export const fetchDataAction = createAsyncThunk('main/fetchDataFromDB', async (x) => {
    const res =  await axios.get(x);
    const data = res.data;
    const header = res.headers['x-total-count']; // Получаем заголовок X-Total-Count
    return { data, header}
})

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
    },

    extraReducers: (builder) => {
        builder.addCase(fetchDataAction.pending, (state) => {
            console.log('ЭТО ОТПРАВКА!!!!')
            state.status = 'loading'
        })
        builder.addCase(fetchDataAction.fulfilled, (state, action) => {
            console.log('ЭТО УСПЕХ!!!!', action.payload)
            state.status = 'success'
            state.items = action.payload.data
            state.pagesQty = Math.ceil(action.payload.header / 8);// Предполагается, что на каждой странице 8 элементов
        })
        builder.addCase(fetchDataAction.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'error'
            state.error = action.payload
            state.items = []
            console.log('ЭТО ОШИБКА!!!!', state.error)
        })
    }
});

export default mainSlice.reducer;
export const {setItems, setPagesQty} = mainSlice.actions;