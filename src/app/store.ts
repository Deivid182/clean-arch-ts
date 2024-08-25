import type { Person } from "@/models";
import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice, peopleSlice } from "./features";

export type AppStore = {
  people: Person[]
  favorites: {
    people: Person[]
  }
}

export const store = configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch