import React, { useRef } from "react";
import { Liquid } from "@ant-design/plots";
import { useTheme } from "@mui/material/styles";
import styles from "Styles/card.module.scss";
import { useSelector } from "react-redux";


const HumidityCard = ({ data, index }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const config = {
    percent: Number((data.relative.value / 100).toFixed(2)),
    outline: {
      border: 4,
      distance: 8,
    },

    wave: {
      length: 128,
    },
    color: "#2b97c8",
    liquidStyle: {
      fill: "#2b97c8",
      fillOpacity: 0.5,
      stroke: "#2b97c8",
      strokeOpacity: 0.7,
      cursor: "pointer",
    },
    outline: {
      border: 5,
      distance: 0,
    },

    statistic: {
      content: {
        style: {
          textTransform: "capitalize",
          fontSize: "clamp(0.7rem,1vw,1.5rem)",
          fontWeight: "500",
          color: theme.palette.text.primary,
        },
        formatter: ({ percent }) => {
          const humidity = percent * 100;
          return `${humidity.toFixed(0)}%`;
        },
      },
    },
  };

  return (
    <React.Fragment>
      <div className={styles.card_box_content}>
        <Liquid ref={ref} {...config} autoFit={true} />
      </div>
    </React.Fragment>
  );
};

export default HumidityCard;
