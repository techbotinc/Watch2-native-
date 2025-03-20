const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

const rooms = {};

io.on("connection", (socket) => {
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    if (!rooms[roomId]) rooms[roomId] = { videoId: "" };
    socket.emit("videoUpdate", rooms[roomId].videoId);
  });

  socket.on("videoUpdate", ({ roomId, videoId }) => {
    rooms[roomId].videoId = videoId;
    io.to(roomId).emit("videoUpdate", videoId);
  });

  socket.on("chatMessage", ({ roomId, message }) => {
    io.to(roomId).emit("chatMessage", message);
  });
});

// Add a route to check if the server is running
app.get("/", (req, res) => {
  res.send("Watch Together Server is Running...");
});

server.listen(3000, () => console.log("Server running on port 3000"));
