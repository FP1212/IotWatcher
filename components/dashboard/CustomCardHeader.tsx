import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardHeader, IconButton, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useMemo, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import {ICardHeader} from "../../types";
import styles from "Styles/card.module.scss";

interface CardHeaderState {
  open: boolean;
  anchorEl: any;
  selected: number;
}

const CustomCardHeader = React.memo(
  ({ Icon, title, tab, index, items, date }: ICardHeader) => {
    const [menu, setMenuState] = useState<CardHeaderState>({
      open: false,
      anchorEl: null,
      selected: 0,
    });

    const dispatch = useAppDispatch();
    const theme = useTheme();

    const menuList = useMemo(
      () =>
        items.map((menu, index) => (
          <MenuItem
            key={"menu" + index}
            value={index}
            onClick={(event) => {
              setMenuState({
                ...menu,
                open: false,
                anchorEl: event.currentTarget,
                selected: event.currentTarget.value,
              });
            }}
          >
            {menu}
          </MenuItem>
        )),
      []
    );

    return (
      <React.Fragment>
        <CardHeader
          sx={{ width: "100%" }}
          avatar={
            <Icon sx={{ fill: theme.palette.info.dark }} aria-label="recipe" />
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={(event) => {
                setMenuState({
                  ...menu,
                  anchorEl: event.currentTarget,
                  open: Boolean(event.currentTarget),
                });
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{
            textTransform: "capitalize",
            fontSize: "clamp(0.7rem,1vw,1.5rem)",
            fontWeight: "500",
            color: theme.palette.text.primary,
          }}
          title={title}
          subheader={date.toLocaleString()}
        />
        <Menu
          id="simple-menu"
          anchorEl={menu.anchorEl}
          keepMounted
          open={menu.open}
          onClose={() => {
            setMenuState({
              ...menu,
              anchorEl: null,
              open: false,
            });
          }}
        >
          {menuList}
        </Menu>
      </React.Fragment>
    );
  }
);

export default CustomCardHeader;
