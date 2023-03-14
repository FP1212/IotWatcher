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

export default function Dashboard() {
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useEffect((): any => socketHandler(dispatch, updateWidget), []);

  return (
    <React.Fragment>
      <ButtonAddComponent tab="0" />
      <CustomResponsiveGridLayout>
        <GridItem ref={ref} key="test" data-grid={{ x: 0, y: 0, w: 2, h: 3 }}>
          <CustomCard
            tab={0}
            index={0}
            title={"temperature"}
            date={new Date()}
            Icon={DeviceThermostatIcon}
          >
            <TemperatureCard selector={undefined} tab={0} index={0} />
          </CustomCard>
        </GridItem>
        <GridItem ref={ref} key="test2" data-grid={{ x: 2, y: 0, w: 2, h: 3 }}>
          <CustomCard
            tab={0}
            index={0}
            title={"temperature"}
            date={new Date()}
            Icon={DeviceThermostatIcon}
          >
            <TemperatureCard selector={undefined} tab={0} index={0} />
          </CustomCard>
        </GridItem>
        <GridItem ref={ref} key="test3" data-grid={{ x: 4, y: 0, w: 2, h: 3 }}>
          <CustomCard
            tab={0}
            index={0}
            title={"temperature"}
            date={new Date()}
            Icon={DeviceThermostatIcon}
          >
            <TemperatureCard selector={undefined} tab={0} index={0} />
          </CustomCard>
        </GridItem>
      </CustomResponsiveGridLayout>
    </React.Fragment>
  );
}
