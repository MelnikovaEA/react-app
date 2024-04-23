import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {RootState} from "../store.ts";
import {Item} from "../../appTypes/appTypes";

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

type MainState = {
    items: Item[],
    pagesQty: number,
    status: Status,
    error: string,
    errorStatus: number | undefined
}

const initialState: MainState = {
    items: [],
    pagesQty: 0,
    status: Status.LOADING,
    error: '',
    errorStatus: undefined
}

type TError = {
    message: string,
    status: number | undefined
}

export const fetchDataAction = createAsyncThunk<
    { data: Item[], header: number },
    string,
    { rejectValue: TError }
>(
    'main/fetchDataFromDB',
    async (x: string, {rejectWithValue}) => {
        try {
            const res = await axios.get(x);
            const data = res.data;
            const header: number = res.headers['x-total-count']; // Получаем заголовок X-Total-Count
            return {data, header}
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = error.message;
                const status = error.response?.status;
                return rejectWithValue({message, status})
            } else {
                return rejectWithValue({message: 'Network Error', status: undefined});
            }
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
            state.status = Status.LOADING;
        })
        builder.addCase(fetchDataAction.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.items = action.payload.data;
            state.pagesQty = Math.ceil(action.payload.header / 8);// Предполагается, что на каждой странице 8 элементов
        })
        builder.addCase(fetchDataAction.rejected, (state, action) => {
           if(action.payload) {
               console.log(action.payload)
               state.status = Status.ERROR;
               state.error = action.payload.message;
               state.errorStatus = action.payload.status;
               state.items = [];
           }
        })
    }
});

export const selectMain = (store: RootState) => store.main;

export default mainSlice.reducer;
//export const {setItems, setPagesQty} = mainSlice.actions;