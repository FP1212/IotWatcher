import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import ICardDataSelector from "../types/ICardDataSelector";

// Type for our state
export interface DashboardState extends ICardDataSelector {
  message: string;
  cards: any[];
}

// Initial state
const initialState: DashboardState = {
  tab: 0,
  index: 0,
  cards: [[{ unit: "T", value: 30 }], [{ unit: "T", value: 60 }]],
  message: "Awaiting for a message",
};

// Actual Slice
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // Action to set the authentication status
    updateWidget(state, action: PayloadAction<DashboardState>) {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateWidget } = dashboardSlice.actions;

export const selectDashboardState =
  ({ tab, index }: ICardDataSelector) =>
  (state: RootState) =>
    state.dashboard.cards[tab][index];

export default dashboardSlice;
