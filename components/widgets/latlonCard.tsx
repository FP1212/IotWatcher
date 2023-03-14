import React, { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import styles from "Styles/card.module.scss";
import { useTheme } from "@mui/material/styles";
import ResourceManager from "Utils/ResourceManager";
import { useSelector } from "react-redux";
//DashboardSlice reducers

const MyLocationIcon = ResourceManager.getIconResource("location");

const LatLonCard = (props) => {
  const theme = useTheme();
  const { data, index } = props;

  const grados_min_seg = (palabra) => {
    return (
      Number.parseFloat(palabra.slice(0, palabra.indexOf(".") - 2)) +
      "° " +
      palabra.slice(palabra.indexOf(".") - 2, palabra.length - 1) +
      "' " +
      palabra[palabra.length - 1]
    );
  };

  return (
    <React.Fragment>
      <div className={styles.card_box_content}>
        <MyLocationIcon className={styles.card_icon_small} />
      </div>
      <Stack spacing={2} className={styles.card_stack_content}>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(0.8rem,1vw,2rem)",
            fontWeight: "500",
            color: theme.palette.text.primary,
          }}>{`${grados_min_seg(data.latitude)}`}</Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(0.8rem,1vw,2rem)",
            fontWeight: "500",
            color: theme.palette.text.primary,
          }}>{`${grados_min_seg(data.longitude)}`}</Typography>
      </Stack>
    </React.Fragment>
  );
};

export default LatLonCard;
