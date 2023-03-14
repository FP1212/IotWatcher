import React from "react";
import { Box, Slider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

function preventHorizontalKeyboardNavigation(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
  }
}

const scale = (unscaledNum, minAllowed, maxAllowed, min, max) => {
  return (
    ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed
  );
};
const HeaveCard = (props) => {
  const { data, title, index } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "inherit",
        margin: "auto",
      }}>
      <Slider
        sx={{
          "& .MuiSlider-valueLabelOpen": {
            //background:"#66bf2f",
            background: theme.palette.mode === "dark" ? "#66bf2f" : "#12620d",
          },

          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
          "color": theme.palette.mode === "dark" ? "#66bf2f" : "#12620d",
          "width": "1vw",
          "& .MuiSlider-markLabel": {
            fontSize: "clamp(0.5rem,1vw,1rem)",
          },
          "& .MuiSlider-mark": {
            "backgroundColor": "#bfbfbf",
            "height": 2,
            "width": "23px",
            "&.MuiSlider-markActive": {
              opacity: 1,
              backgroundColor: "currentColor",
            },
          },
        }}
        orientation="vertical"
        defaultValue={50}
        value={scale(Math.round(data.value), 0, 100, -10, 10)}
        aria-label="Heave"
        valueLabelDisplay="on"
        valueLabelFormat={(value) => (
          <div>{`${Number(data.value).toFixed(1)}`}</div>
        )}
        onKeyDown={preventHorizontalKeyboardNavigation}
        getAriaValueText={(value) => {
          return `${value}`;
        }}
        marks={[
          { value: 0, label: "-10 m" },
          { value: 50, label: "0 m" },
          { value: 100, label: "10 m" },
        ]}
      />
    </Box>
  );
};

export default HeaveCard;
