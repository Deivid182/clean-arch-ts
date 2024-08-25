import { LocalStorageType, type Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoritesState = {
  people: Person[];
};

const initialState: FavoritesState = {
  people: [],
};

const getInitialState = (): FavoritesState => {
  const favorites = getLocalStorage(LocalStorageType.FAVORITES) as string;
  if (favorites) {
    return JSON.parse(favorites) as FavoritesState;
  } else {
    return initialState;
  }
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getInitialState(),
  reducers: {
    addFavorite: (state, action: PayloadAction<Person>) => {
      const foundPerson = state.people.find((p) => p.id === action.payload.id);
      if (foundPerson) {
        state.people = state.people.filter((p) => p.id !== action.payload.id);
      } else {
        state.people = [...state.people, action.payload];
      }
      setLocalStorage(LocalStorageType.FAVORITES, state);
    },
    removeFavorite: (state, action: PayloadAction<Person>) => {
      state.people = state.people.filter((p) => p.id !== action.payload.id);
      setLocalStorage(LocalStorageType.FAVORITES, state);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
