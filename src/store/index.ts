import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducers/productReducer";
const store = configureStore({
  reducer: {
    productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export default store;
