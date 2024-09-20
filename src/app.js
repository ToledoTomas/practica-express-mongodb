import express from "express";
import routes from "../routes/index.js";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import { createRoles } from "../libs/initialSetup.js";

config();

const app = express();
createRoles();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/", routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error(err);
  });

export default app;
