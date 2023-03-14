import React, { useRef } from "react";
import { Gauge, G2 } from "@ant-design/plots";
// import { Typography, Box } from "@mui/material";
import styles from "Styles/card.module.scss";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const ticks = [0, 1 / 4, 2 / 4, 3 / 4, 1];

G2.registerShape("point", "triangle-gauge-indicator", {
  draw(cfg, container) {
    // 使用 customInfo 传递参数
    const { indicator, defaultColor } = cfg.customInfo;
    const { pointer } = indicator;
    const group = container.addGroup(); // 获取极坐标系下画布中心点

    const center = this.parsePoint({
      x: 0,
      y: 0,
    }); // 绘制指针

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
          fill: defaultColor,
          ...pointer.style,
        },
      });
    }

    return group;
  },
});

const RollGauge = (props) => {
  const { data, index } = props;
  const theme = useTheme();
  const ref = useRef(null);
  const config = {
    percent: (data.value - 800) / 400,
    startAngle: Math.PI,
    endAngle: Math.PI * 2,
    range: {
      ticks,
      color:
        theme.palette.mode == "dark"
          ? ["#8e8a3e", "#607115", "#717c3a", "#caea41"]
          : ["#607115", "#717c3a", "#8e8a3e", "#435226"],
    },
    //
    indicator: {
      shape: "triangle-gauge-indicator",
      pointer: {
        style: {
          stroke: theme.palette.mode == "dark" ? "#D0D0D0" : "rgb(255, 89, 94)",
          lineWidth: 1,
          fill: theme.palette.mode == "dark" ? "#D0D0D0" : "rgb(255, 89, 94)",
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 400 + 800;
        },
      },
      tickCount: 6,
      tickInterval: 0.25,
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        // offsetY: -55,
        // offsetX: -20,
        style: {
          fontWeight: "500",
          color: theme.palette.text.primary,
          fontSize: 18,
          textAlign: "center",
          textBaseline: "middle",
        },
        formatter: ({ percent }) => {
          return `${data.value.toFixed(2)} mbar`;
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Gauge
        ref={ref}
        {...config}
        autoFit={true}
        //className={styles.card_icon_big}
        //renderer="svg"
      />
    </React.Fragment>
  );
};

export default RollGauge;
