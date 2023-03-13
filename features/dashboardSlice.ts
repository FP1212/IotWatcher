import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// Type for our state
export interface DashboardState {
  message: string;
}

// Initial state
const initialState: DashboardState = {
  message: "Awaiting for a message",
};

// Actual Slice
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // Action to set the authentication status
    updateWidget(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { updateWidget } = dashboardSlice.actions;

export const selectDashboardState = (state: RootState) =>
  state.dashboard.message;

export default dashboardSlice;
