import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../../../modules/login/types/UserType";
import { NotificationTypes } from "../../../shared/types/NotificationType";

// Define um tipo para o estado do slice
interface GlobalState {
  notification?: NotificationTypes;
  user?: UserType;
}

// Defina o estado inicial usando esse tipo
const initialState: GlobalState = {
  notification: undefined,
  user: undefined,
};

export const counterSlice = createSlice({
  name: "globalReducer",
  // `createSlice` irá inferir o tipo de estado do argumento `initialState`

  initialState,
  reducers: {
    setNotificationAction: (
      state,
      action: PayloadAction<NotificationTypes>,
    ) => {
      state.notification = action.payload;
    },
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUserAction } = counterSlice.actions;

export default counterSlice.reducer;
