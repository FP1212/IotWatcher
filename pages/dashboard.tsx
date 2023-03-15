import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CustomResponsiveGridLayout from "../components/CustomResponsiveGridLayout";
import ButtonAddComponent from "../components/dashboard/ButtonAdd";
import { socketHandler } from "../app/socketInitializer";
import { updateWidget, selectDashboardState } from "../features/dashboardSlice";
import { AnyAction, Dispatch } from "redux";
import CustomCard from "../components/dashboard/CustomCard";
import GridItem from "../components/dashboard/GridItem";
import TemperatureCard from "../components/widgets/temperatureCard";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { cardGenerator } from "../utils";
import { type } from "os";

export default function Dashboard() {
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useEffect((): any => socketHandler(dispatch, updateWidget), []);

  return (
    <React.Fragment>
      <ButtonAddComponent tab="0" />
      <CustomResponsiveGridLayout>
        {["TemperatureCard", "DepthCard"].map((name, i) => (
          <GridItem
            ref={ref}
            key={name}
            data-grid={{ x: i + 1, y: 0, w: 2, h: 3 }}
          >
            {cardGenerator(
              { type: name },
              {
                title: name,
                Icon: DeviceThermostatIcon,
                tab: 0,
                index: 0,
                date: new Date(),
              },
              selectDashboardState
            )}
          </GridItem>
        ))}
      </CustomResponsiveGridLayout>
    </React.Fragment>
  );
}
