import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "../../../shared/types/ProductType";

// Define um tipo para o estado do slice
interface ProductState {
  products: ProductType[];
}

// Defina o estado inicial usando esse tipo
const initialState: ProductState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "productReducer",
  // `createSlice` irá inferir o tipo de estado do argumento `initialState`

  initialState,
  reducers: {
    setProductAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductAction } = counterSlice.actions;

export default counterSlice.reducer;
