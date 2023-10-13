import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseData } from '../../App.types';

interface FavoritesState {
  favorite: ResponseData[];
}

const initialState: FavoritesState = {
  favorite: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavor: (state, action: PayloadAction<ResponseData>) => {
      state.favorite = [...state.favorite, action.payload];
    },

    deleteFavor: (state, action: PayloadAction<{ id: number }>) => {
      state.favorite = state.favorite.filter(item => item.id !== action.payload.id);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addFavor, deleteFavor } = favoritesSlice.actions;

// Selector
export const selectFavorites = (state: { favorites: FavoritesState }) => state.favorites.favorite;
