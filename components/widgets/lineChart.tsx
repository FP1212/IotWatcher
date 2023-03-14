import React, { useState, useEffect, useRef } from "react";
import { Line } from "@ant-design/plots";
import chart_styles from "Styles/chart.module.scss";
import { useTranslation } from "react-i18next";

const MAX_BUFFER_SIZE = 256;

const LineChart = (props) => {
  const { data, index } = props;
  const [t] = useTranslation();
  const ref = useRef(null);
  const dataType = {
    Time: Date.now(),
    // type: `${t("Cards.Temperature")} ${new Date().toDateString()}`,
    type: `${"Temperature"} ${new Date().toDateString()}`,
    scales: Number.parseFloat(Number(data.value).toFixed(2)),
  };

  const [rtSerie, setRtSerie] = useState([]);

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
    color: "#d62728",
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

export default LineChart;
