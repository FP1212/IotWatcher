import React, { cloneElement } from "react";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent } from "@mui/material";
import { selectDashboardState } from "../../features/dashboardSlice";
import CustomCardHeader from "./CustomCardHeader";
import ICustomCard from "../../types/ICustomCard";
import styles from "Styles/card.module.scss";

const menuItems = ["Cambiar Color", "Forzar Valor", "Remover"];

const CustomCard = ({
  children,
  tab,
  index,
  title,
  date,
  Icon,
}: ICustomCard) => {
  const theme = useTheme();

  return (
    <Card
      raised={true}
      className={styles.card}
      sx={{
        backgroundColor: theme.palette.mode == "dark" ? grey[900] : "#f8f9fa",
      }}
    >
      <CustomCardHeader
        title={title}
        date={date}
        tab={tab}
        index={index}
        items={menuItems}
        Icon={Icon}
      />
      <CardContent
        className={styles.card_content}
        sx={{
          padding: "0px",
        }}
        children={cloneElement(children as React.ReactElement<any>, {
          selector: selectDashboardState,
        })}
      />
    </Card>
  );
};

export default React.memo(CustomCard);
