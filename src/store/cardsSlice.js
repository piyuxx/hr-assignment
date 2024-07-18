import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { act } from 'react';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
})
const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        loading: true,
        currentPage: 1,
        cardsPerPage: 6,
        cardView: 'default'
    },
    reducers: {
        removeCard: (state, action) => {
            const index = state.cards.findIndex(card => card.id === action.payload);
            if (index !== -1) {
                state.cards = state.cards.filter((num, id) => index !== id)
            }
            // state.currentPage = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        toggleCardView: (state) => {
            state.cardView = state.cardView === 'default' ? 'alternate' : 'default';
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.cards = action.payload;
            state.loading = false;
        })
    }
})
export const { removeCard, setCurrentPage, toggleCardView } = cardsSlice.actions;
export default cardsSlice.reducer;