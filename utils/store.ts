import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import cursorReducer from "./cursorSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    cursor: cursorReducer,
  },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
