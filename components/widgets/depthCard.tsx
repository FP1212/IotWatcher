import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import styles from "Styles/card.module.scss";
import { useTheme } from "@mui/material/styles";
import OpacityIcon from "@mui/icons-material/Opacity";
import { useSelector } from "react-redux";


const DepthCard = (props) => {
  const { data, index } = props;
  const theme = useTheme();
  return (
    <React.Fragment>
      <div className={styles.card_box_content}>
        <OpacityIcon sx={{ width: "50%", height: "100%", fill: "#57cc99" }} />
      </div>
      <Stack spacing={2} className={styles.card_stack_content}>
        <Typography
          className={styles.content_1}
          sx={{
            textTransform: "none",
            fontSize: 16,
            fontWeight: "500",
            color: theme.palette.text.primary,
          }}>{`${Number.parseFloat(data.value).toFixed(1)} m`}</Typography>
      </Stack>
    </React.Fragment>
  );
};

export default DepthCard;
