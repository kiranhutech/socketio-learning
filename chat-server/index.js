const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST", "PUT"] },
});

app.get("/", (req, res) => {
  res.send("WELCOME TO SOCKET.IO CHAT SERVER");
});

io.on("connection", (socket) => {
  //define all socket events here
});

server.listen(3001, () => {
  console.log("Socket server runnig on port:3001");
});
