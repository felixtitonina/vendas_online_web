import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CategoryType } from "../../../shared/types/CategoryType";

// Define um tipo para o estado do slice
interface CategoryState {
  categories: CategoryType[];
}

// Defina o estado inicial usando esse tipo
const initialState: CategoryState = {
  categories: [],
};

export const counterSlice = createSlice({
  name: "categoryReducer",
  // `createSlice` irá inferir o tipo de estado do argumento `initialState`

  initialState,
  reducers: {
    setCategoryAction: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategoryAction } = counterSlice.actions;

export default counterSlice.reducer;
