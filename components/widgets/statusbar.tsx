import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, lightBlue, grey } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import IPCKEYS from "Constants/ipckeys.json";
import { DDU_MAIN_UNIT_TOPICS } from "Broker/config/topics";

// Import params
const params = window.api.configParams;
const { exchanges } = params.amqp;

//statusSlice reducers
import { update, selectStatus } from "Redux/components/status/statusSlice";

//brokerSlice reducers
import {
  request,
  suscribe,
  unsuscribe,
} from "Redux/components/broker/brokerSlice";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: lightBlue,
  },
});

const StatusBar = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  useEffect(() => {
    // Suscribe to "fp" exchange
    // Enable update Redux Store with amqlib payload
    dispatch(
      suscribe(suscribePubSubResponse, IPCKEYS.statusbarKey, update, {
        params: {
          exchange: exchanges[1],
          routingKey: DDU_MAIN_UNIT_TOPICS.ddu_main_unit_status.id,
          ipcChannel: IPCKEYS.statusbarKey,
        },
      })
    );
    return () => {
      dispatch(
        unsuscribe({
          params: {
            queue: {
              exchange: exchanges[1],
              routingKey: DDU_MAIN_UNIT_TOPICS.ddu_main_unit_status.id,
              ipcChannel: IPCKEYS.statusbarKey,
            },
          },
        })
      );
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{ bgcolor: grey[800], flexGrow: 1, height: "100%" }}>
        <Container maxWidth="lg">
          <Grid container maxHeight="lg" spacing={0} py={1}>
            <Grid item xs={"auto"} mx={2}>
              <Typography
                sx={{
                  color: "common.white",
                }}>{`Master: DDU${status.masterSource}`}</Typography>
            </Grid>
            <Grid item xs={"auto"} mx={2}>
              <Typography
                sx={{
                  color: "common.white",
                }}>{`Connection: ${status.connection}`}</Typography>
            </Grid>
            <Grid item xs={"auto"} mx={2}>
              <Typography
                sx={{
                  color: "common.white",
                }}>{`State: ${status.state}`}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default React.memo(StatusBar);
