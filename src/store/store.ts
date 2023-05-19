import { configureStore, combineReducers } from "@reduxjs/toolkit";
import entryesSliceReducer from "./reducers/entryesSlice"

const rootReducer = combineReducers({
  entryesSlice: entryesSliceReducer,
  
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
