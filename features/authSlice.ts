import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action: PayloadAction<boolean>) {
      state.authState = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth.authState;

export default authSlice;
