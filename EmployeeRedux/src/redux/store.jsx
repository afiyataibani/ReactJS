import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
import { loadState, saveState } from "../utils/localstorage";

const preloadedState = loadState() || { employee: [] };

const store = configureStore({
  reducer: Reducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
