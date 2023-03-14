import React from "react";
import { Typography, Stack } from "@mui/material";
import styles from "Styles/card.module.scss";
import { useTheme } from "@mui/material/styles";
import ResourceManager from "Utils/ResourceManager";

const NavyPitch = ResourceManager.getIconResource("navyPitch");
const NavyRoll = ResourceManager.getIconResource("navyRoll");

// function preventHorizontalKeyboardNavigation(event) {
//   if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
//     event.preventDefault();
//   }
// }

function zfill(number, separador, cifrasEnteras) {
  // var numberOutput = Math.abs(number); /* Valor absoluto del número */
  var zero = "0"; /* String de cero */
  const signo = (number) => (Number.parseFloat(number) < 0 ? "-" : "");
  const numString = number; //number.toString();

  if (numString.includes(separador)) {
    // si es un numero con parte decimal
    const entera =
      signo(number) === "-"
        ? numString.slice(1, numString.indexOf(separador))
        : numString.slice(0, numString.indexOf(separador));

    const decimal = numString.slice(
      numString.indexOf(separador),
      numString.length
    );
    const length = entera.length; /* Largo del número */

    if (cifrasEnteras >= length) {
      return (
        signo(number) + zero.repeat(cifrasEnteras - length) + entera + decimal
      );
    }
  } else {
    // si es un numero
    const entera =
      signo(number) === "-"
        ? numString.slice(1, number.length)
        : numString.slice(0, number.length);
    if (cifrasEnteras >= entera.length) {
      return (
        signo(number) + zero.repeat(cifrasEnteras - entera.length) + entera
      );
    }
  }
  return number;
}

const ColumnItem = (props) => {
  const { data, Icon, title } = props;
  const theme = useTheme();

  const dataFormat = zfill(Number.parseFloat(data).toFixed(2), ".", 3);

  return (
    <Stack sx={{ width: "50%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "auto",
          maxWidth: "80%",
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Icon
          className={styles.card_icon_small}
          style={{
            transform: `rotate(${data}deg)`,
            padding: 10,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          //justifyContent: "space-between",
          alignItems: "center",
          margin: "0 20px",
          height: "20%",
        }}>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(0.6rem,1vw,1.4rem)",
            fontWeight: "500",
            color: theme.palette.text.primary,
          }}>
          {title}
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: "clamp(0.7rem,1vw,1.5rem)",
            fontWeight: "500",
            color: theme.palette.text.primary,
            mx: 2,
          }}>
          {`${dataFormat}°`}
        </Typography>
      </div>
    </Stack>
  );
};

const PitchRollCard = (props) => {
  const { data, index } = props;

  return (
    <React.Fragment>
      <ColumnItem title={"Pitch:"} data={data.pitch} Icon={NavyPitch} />
      <ColumnItem title={"Roll:"} data={data.roll} Icon={NavyRoll} />
    </React.Fragment>
  );
};

export default PitchRollCard;
