import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json()); //used for parsing the json data

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

//TODO:
//1. Add a socket.io connection to the server
//2. Add configure this server for deployment
