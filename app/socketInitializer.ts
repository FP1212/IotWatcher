import { io } from "Socket.IO-client";
import { AnyAction, Dispatch } from "redux";

export const socketHandler = async (
  dispatch: Dispatch<AnyAction>,
  action: any
) => {
  await fetch("/api/socket");
  const socket = io();

  // log socket connection
  socket.on("connect", () => {
    console.log("Socket Connected, ID: ", socket.id);
    dispatch(action("connected"));
  });

  // update chat on new message dispatched
  socket.on("message", (message: any) => {
    dispatch(action(message));
  });

  // socket disconnet onUnmount if exists
  //if (socket) return () => socket.disconnect();
};
