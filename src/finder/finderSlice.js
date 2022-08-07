import { createSlice } from "@reduxjs/toolkit"
const initialState = { number: 0, isLoading: false, error: null}

const finderSlice = createSlice({ 
    name: 'finder',
    initialState,
    reducers: {
        GetRandomSuccess(state, {payload}){
            state.number = Math.random() * 100 ;
            state.isLoading = false;
            state.error = null;
        },
        isLoadingRandomNumber(state) {
            state.isLoading = true;
        },
    }

});

export const { GetRandomSuccess, isLoadingRandomNumber} = finderSlice.actions
export default finderSlice.reducer;