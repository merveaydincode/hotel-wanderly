// src/store/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '../../../assets/types/types';

interface FavoritesState {
  favorites: Hotel[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Hotel>) => {
      const existingIndex = state.favorites.findIndex(hotel => hotel.id === action.payload.id);
      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1); // Favoriyi kaldır
      } else {
        state.favorites.push(action.payload); // Favoriye ekle
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
