// src/features/cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeCard: 'sedan',
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setActiveCard: (state, action) => {
            state.activeCard = action.payload;
        },
    },
});

export const { setActiveCard } = cardSlice.actions;

export default cardSlice.reducer;
