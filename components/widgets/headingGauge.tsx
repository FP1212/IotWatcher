import React, { useRef } from "react";
import { G2, Mix } from "@ant-design/plots";
import styles from "Styles/card.module.scss";
import { useTheme } from "@mui/material/styles";
const ticks = [0, 1 / 4, 2 / 4, 3 / 4, 1];
import { useTranslation } from "react-i18next";

G2.registerShape("point", "triangle-gauge-indicator", {
  draw(cfg, container) {
    const { indicator, defaultColor } = cfg.customInfo;

    const { pointer } = indicator;
    const group = container.addGroup();

    const center = this.parsePoint({
      x: 0,
      y: 0,
    });

    if (pointer) {
      const { startAngle, endAngle } = G2.Util.getAngle(cfg, this.coordinate);
      const radius = this.coordinate.getRadius();
      const midAngle = (startAngle + endAngle) / 2;
      const { x: x1, y: y1 } = G2.Util.polarToCartesian(
        center.x,
        center.y,
        radius * 0.52,
        midAngle + Math.PI / 30
      );
      const { x: x2, y: y2 } = G2.Util.polarToCartesian(
        center.x,
        center.y,
        radius * 0.52,
        midAngle - Math.PI / 30
      );
      const { x, y } = G2.Util.polarToCartesian(
        center.x,
        center.y,
        radius * 0.6,
        midAngle
      );
      const path = [["M", x1, y1], ["L", x, y], ["L", x2, y2], ["Z"]]; // pointer

      group.addShape("path", {
        name: "pointer",
        attrs: {
          path,
          fill: "#d90429",
          ...pointer.style,
        },
      });
    }

    return group;
  },
});

const HeadingCard = ({ data, index }) => {
  const theme = useTheme();
  const [t] = useTranslation();
  const ref = useRef(null);
  const first_gauge = {
    percent: data.direction.true / 360,
    startAngle: -Math.PI + Math.PI / 2,
    endAngle: Math.PI + Math.PI / 2,
    innerRadius: 0.9,
    range: {
      ticks,
      color:
        theme.palette.mode !== "dark"
          ? ["#12620d", "#12620d", "#12620d", "#12620d"]
          : ["#66bf2f", "#66bf2f", "#66bf2f", "#66bf2f"],
    },
    gaugeStyle: {
      lineCap: "round",
    },

    // type: "meter",
    // meter: { steps: 25 },
    indicator: {
      shape: "triangle-gauge-indicator",
      pointer: {
        style: {
          stroke: theme.palette.mode == "dark" ? "#D0D0D0" : "rgb(255, 89, 94)",
          lineWidth: 3,
          fill: theme.palette.mode == "dark" ? "#D0D0D0" : "rgb(255, 89, 94)",
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) != 0 ? (Number(v) * 360).toFixed(0) : 360;
        },
      },

      tickInterval: 0.125,
      subTickLine: {
        count: 0,
      },
    },
    statistic: {
      title: {
        content: t("Heading"),
        offsetY: 60,
        style: {
          fontWeight: "500",
          color: theme.palette.mode == "dark" ? "rgb(255, 89, 94)" : "#ff595e",
          fontSize: "0.9vw",
          textAlign: "start",
          textBaseline: "middle",
        },
      },
      content: {
        // offsetX: offset.x,
        // offsetY: offset.y,
        offsetY: 75,
        style: {
          textTransform: "capitalize",
          fontWeight: "500",
          color: theme.palette.text.primary,
          fontSize: "0.9vw",
          textAlign: "start",
          textBaseline: "middle",
        },
        formatter: ({ percent }) => {
          return `${(percent * 360).toFixed(2)}°`;
        },
      },
    },
  };

  const second_gauge = {
    percent: data.direction.magnetic / 360,
    startAngle: -Math.PI + Math.PI / 2,
    endAngle: Math.PI + Math.PI / 2,
    radius: 0.7,
    innerRadius: 0.9,
    range: {
      color: "rgba(100, 100, 100, 0)",
    },
    gaugeStyle: {
      fill: "rgba(100, 100, 100, 0)",
    },

    // type: "meter",
    // meter: { steps: 25 },
    indicator: {
      shape: "triangle-gauge-indicator",
      pointer: {
        style: {
          stroke: theme.palette.mode == "dark" ? "#c7f9cc" : "#12620d",
          lineWidth: 3,
          fill: theme.palette.mode == "dark" ? "#c7f9cc" : "#12620d",
        },
      },
    },
    axis: false,
    statistic: {
      title: {
        content: t("Course"),
        offsetY: 76,
        style: {
          fontWeight: "500",
          color: theme.palette.mode == "dark" ? "#c7f9cc" : "#12620d",
          fontSize: "0.9vw",
          textAlign: "start",
          textBaseline: "middle",
        },
      },
      content: {
        // offsetX: offset.x,
        // offsetY: offset.y,
        offsetY: 90,
        style: {
          textTransform: "capitalize",
          fontWeight: "500",
          color: theme.palette.text.primary,
          fontSize: "0.9vw",
          textAlign: "start",
          textBaseline: "middle",
        },
        formatter: ({ percent }) => {
          return `${(percent * 360).toFixed(2)}°`;
        },
      },
    },
  };

  const config = {
    tooltip: false,
    legend: false,
    plots: [
      {
        type: "gauge",
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 1,
            y: 1,
          },
        },
        options: second_gauge,
      },
      {
        type: "gauge",
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 1,
            y: 1,
          },
        },
        options: first_gauge,
      },
    ],
  };

  return (
    <React.Fragment>
      <Mix
        ref={ref}
        {...config}
        autoFit={true}
        //className={styles.card_icon_big}
        //renderer="svg"
      />
    </React.Fragment>
  );
};

export default HeadingCard;
