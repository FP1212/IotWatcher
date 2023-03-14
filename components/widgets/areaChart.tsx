import React, { useState, useEffect, useRef } from "react";
import { Area, Line } from "@ant-design/plots";
import chart_styles from "Styles/chart.module.scss";
//import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const MAX_BUFFER_SIZE = 256;

/**
 *
 *
 * @param {*} { data, title }
 * @return {*}
 */
const AreaChart = ({ data, title, index }) => {
  const [rtSerie, setRtSerie] = useState([]);
  // const theme = useTheme();
  const [t, i18n] = useTranslation();
  const ref = useRef(null);

  const dataType = {
    Time: Date.now(),
    // type: `${t("Cards.Depth")} ${new Date().toDateString()}`,
    type: `${"Depth"} ${new Date().toDateString()}`,
    scales: -Number.parseFloat(Number(data.value).toFixed(2)),
  };

  useEffect(() => {
    if (rtSerie.length > MAX_BUFFER_SIZE) {
      setRtSerie([dataType]);
    } else {
      setRtSerie([...rtSerie, dataType]);
    }
  }, [data]);

  const config = {
    data: rtSerie,
    padding: "auto",
    xField: "Time",
    yField: "scales",
    seriesField: "type",
    color: "#2b97c8", //#66bf2f
    axis: { animate: false },
    xAxis: {
      animate: false,
      label: {
        formatter: (Time) =>
          Time != 0
            ? new Date(parseInt(Time)).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                // second: "2-digit",
              })
            : new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                // second: "2-digit",
              }),
      },
    },
  };

  return (
    <div className={chart_styles.chart}>
      <div className={chart_styles.chart_content}>
        <Line
          ref={ref}
          {...config}
          autoFit={true}
          //renderer="svg"
        />
      </div>
    </div>
  );
};

export default AreaChart;
