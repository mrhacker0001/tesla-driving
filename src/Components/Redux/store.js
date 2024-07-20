import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import lang from "./lang";


const store = configureStore({
    reducer: {
        card: cardReducer,
        lang,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
