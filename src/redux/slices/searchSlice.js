import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    inputData: '',
    localInputData: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputData: (state, action) => {
            state.inputData = action.payload;
        },
        setLocalInputData: (state, action) => {
            state.localInputData = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const {setInputData, setLocalInputData} = searchSlice.actions;