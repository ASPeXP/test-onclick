import { configureStore } from "@reduxjs/toolkit"
import finderReducer from './finder/finderSlice'


export const store =  configureStore({
    reducer: {
        finder: finderReducer,
    },
    devTools: {
        name: "Get number",
    }
});