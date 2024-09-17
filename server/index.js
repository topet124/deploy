import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const cors = require("cors");
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

// routes
import authRouter from "./routes/authRouter.js";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const corsOptions = {
  origin: "http://localhost:5106",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

//#### Error Middleware

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5106;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
