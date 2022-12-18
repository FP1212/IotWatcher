import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { authSlice } from "../features/authSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  auth: authSlice.reducer,
});

const reducer: typeof combinedReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
