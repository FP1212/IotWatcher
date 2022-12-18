import React, { useState, useReducer } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import { createTheme } from "@mui/system";
//import { useDispatch } from "react-redux";

interface ButtonAdd {
    tab: string
}

const createTopicList = (list: []) => {
  // return list.map((topic) => (
  //   <MenuItem key={topic.key} value={topic.value}>
  //     {topic.value}
  //   </MenuItem>
  // ));
};
const createTypeList = (list: []) => {
  // return list.map((topic) => (
  //   <MenuItem key={topic.key} value={topic.type}>
  //     {topic.type}
  //   </MenuItem>
  // ));
};

export default function ButtonAddComponent ( {tab} : ButtonAdd ) {
  //---------------------->Estados React<----------------------//

  const [openModal, onOpenModal] = useState({
    open: false,
  });
  const [modal, setModalState] = useState({
    name: "Vel. Viento",
    type: "Wind",
    topic: "var1",
  });

  //const dispatch = useDispatch();
  const theme = createTheme();

  return (
    <React.Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => onOpenModal({ open: true })}>
        <AddIcon />
      </Fab>
      <Dialog
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
        open={openModal.open}
        onClose={() => onOpenModal({ open: false })}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nuevo Widget</DialogTitle>
        <DialogContent>
          <form
            id="widget_form"
            onSubmit={(e) => {
              e.preventDefault();
                //reducer
              onOpenModal({ open: false });
            }}>
            <FormControl
              sx={{
                // padding: "2rem",
                display: "flex",
                margin: theme.spacing(1),
                minWidth: 120,
              }}>
              <TextField
                autoFocus
                margin="dense"
                label="Nombre"
                type="text"
                fullWidth
                onChange={(e) => {
                  setModalState({ ...modal, name: e.target.value });
                  console.log(e.target.value);
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                // padding: "2rem",
                display: "flex",
                margin: theme.spacing(1),
                minWidth: 120,
              }}>
              <InputLabel>Tipo</InputLabel>
              <Select
                value={modal.type}
                onChange={(e) => {
                  setModalState({ ...modal, type: e.target.value });
                  console.log(e.target.value);
                }}>
                {/* {}  typesList */}
              </Select>
              <FormHelperText>
                Elija el mas apropiado de acuerdo a su sensor
              </FormHelperText>
            </FormControl>
            <FormControl
              sx={{
                // padding: "2rem",
                display: "flex",
                margin: theme.spacing(1),
                minWidth: 120,
              }}>
              <InputLabel id="sensor">Sensor</InputLabel>
              <Select
                value={modal.topic}
                onChange={(e) => {
                  setModalState({ ...modal, topic: e.target.value });
                  console.log(e.target.value);
                }}>
                {/* {availableTopics} */}
              </Select>
              <FormHelperText>
                Elija una de los topicos disponibles
              </FormHelperText>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onOpenModal({ open: false })} color="primary">
            Cancelar
          </Button>
          <Button color="primary" type="submit" form="widget_form">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

