import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./reducers/categoryReducer";
import globalReducer from "./reducers/globalReducer";
import productReducer from "./reducers/productReducer";
const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer,
    globalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export default store;
