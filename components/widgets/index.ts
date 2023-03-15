import dynamic from "next/dynamic";
const AreaChart = dynamic(import("./areaChart"), { ssr: false });
// import RollGauge from "./RollGauge";
import DepthCard from "./depthCard";
// import HeadingGauge from "./HeadingGauge";
const HumidityCard = dynamic(import("./humidityCard"), { ssr: false });
// import LatLonCard from "./latlonCard";
const LineChart = dynamic(import("./lineChart"), { ssr: false });
// import PitchRollCard from "./pitchrollCard";
// import PolarChart from "./polarchart";
// import StatusBar from "./statusbar";
// import Viewer3D from "./viewer3D";
import TemperatureCard from "./temperatureCard";

const Widgets: any = Object.freeze({
  AreaChart: AreaChart,
  // RollGauge,
  DepthCard: DepthCard,
  // HeadingGauge,
  HumidityCard: HumidityCard,
  // LatLonCard,
  LineChart: LineChart,
  // PitchRollCard,
  // PolarChart,
  // StatusBar,
  // Viewer3D,
  TemperatureCard: TemperatureCard,
  // Widgets,
});

export {
  AreaChart,
  // RollGauge,
  DepthCard,
  // HeadingGauge,
  HumidityCard,
  // LatLonCard,
  LineChart,
  // PitchRollCard,
  // PolarChart,
  // StatusBar,
  // Viewer3D,
  TemperatureCard,
  Widgets,
};
