import { createSlice } from '@reduxjs/toolkit';
// import { addToFavorites } from './favorOperations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorite: [],
  },
  reducers: {
    addFavor: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },
    deleteFavor: (state, action) => {
      state.favorite = state.favorite.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavor, deleteFavor } = favoritesSlice.actions;

// Selector
export const selectFavorites = state => state.favorites.favorite;
