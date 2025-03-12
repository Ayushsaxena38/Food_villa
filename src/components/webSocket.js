import { io } from "socket.io-client";

const socket = io("http://localhost:2000");

socket.emit("join", "user123"); // Replace "user123" with the actual user ID

socket.on("connect", () => {
  console.log("Connected to WebSocket server:", socket.id);
});

socket.on("customEvent", (data) => {
  console.log("Received custom event:", data);
});

socket.on("disconnect", () => {
  console.log("Disconnected from WebSocket server");
});
