import React, { useRef } from "react";
import { Mix } from "@ant-design/charts";
import styles from "Styles/card.module.scss";
import { useTheme } from "@mui/material/styles";
import { cardinals } from "Utils";
import { useTranslation } from "react-i18next";

const getCardinal = (speed, direction, cardinals, type) => {
  const cardinalDirection = cardinals.get(direction);
  return Object.entries(cardinals.labels).reduce((prev, label, i) => {
    prev.push({
      direction: label[1],
      value: cardinalDirection === label[1] ? speed : 0,
      type,
    });
    return prev;
  }, []);
};

const formatLegend = (label, speed, direction) => {
  return label === "Relative"
    ? `${label}: ${direction} ° - ${Number(speed).toFixed(2)} m/s`
    : `${label}: ${direction} ° - ${Number(speed).toFixed(2)} Kn`;
};

const buildSeries = (data, cardinals, t) => {
  const windDataList = Object.entries(data);
  if (windDataList)
    return windDataList.reduce(
      (prev, windData) => {
        prev.label.push({
          name: t(windData[0].charAt(0).toUpperCase() + windData[0].slice(1)),
          ...windData[1],
        });

        prev.series.push(
          ...getCardinal(
            windData[1].speed,
            windData[1].direction,
            cardinals,
            t(windData[0].charAt(0).toUpperCase() + windData[0].slice(1))
          )
        );

        return prev;
      },
      { label: [], series: [] }
    );
  else return { label: [], series: [] };
};

const PolarChart = (props) => {
  const { id, title, data, index } = props;
  const [t] = useTranslation();
  const series = buildSeries(data, cardinals, t);
  const theme = useTheme();
  const ref = useRef(null);

  // if (ref.current) {
  //   ref.current.getChart().destroy();
  //   debugger;
  // }

  const config = {
    title,
    legend: {
      layout: "vertical",
      position: "bottom-left",
      offsetX: 30,
      itemName: {
        formatter: (text, item, index) =>
          formatLegend(
            text,
            series.label[index].speed,
            series.label[index].direction
          ),
        style: {
          fontFamiliy: "Helveltica",
          textTransform: "uppercase",
          fontSize: 14,
          y: 8,
          fontWeight: "500",

          fill: theme.palette.text.primary, //"#343a40"
        },
      },
    },

    views: [
      {
        tooltip: {
          showMarkers: false,
          shared: true,
          follow: false,
          showContent: false,
          position: "none",
        },

        data: series.series,
        interactions: [{ type: "active-region" }],
        axes: {
          grid: {
            alignTick: false,
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        },

        coordinate: "polar",

        geometries: [
          {
            type: "interval",
            xField: "direction",
            yField: "value",
            mapping: {},
            colorField: "type",
            adjust: [
              {
                type: "stack",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <React.Fragment>
      <div className={styles.card_box_content}>
        <Mix ref={ref} {...config} autoFit={true} />
      </div>
    </React.Fragment>
  );
};

export default PolarChart;
