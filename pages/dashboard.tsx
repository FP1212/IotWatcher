import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CustomResponsiveGridLayout from "../components/CustomResponsiveGridLayout";
import ButtonAddComponent from "../components/dashboard/ButtonAdd";
import { socketHandler } from "../app/socketInitializer";
import { updateWidget, selectDashboardState } from "../features/dashboardSlice";
import { AnyAction, Dispatch } from "redux";

export default function Dashboard() {
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  useEffect((): any => socketHandler(dispatch, updateWidget), []);
  const message: string = useAppSelector(selectDashboardState);

  return (
    <React.Fragment>
      <ButtonAddComponent tab="0" />
      <a>{message}</a>
      <CustomResponsiveGridLayout>
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
          a
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2 }}>
          b
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
          c
        </div>
      </CustomResponsiveGridLayout>
    </React.Fragment>
  );
}

