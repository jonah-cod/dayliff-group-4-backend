import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./config/database.js";
import { userRouter } from "./routes/usersRoutes.js";
dotenv.config();

const main = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.get("/status", (req, res) => res.json({ status: ok }));
  app.use((req, res, next) => (req.MongoClient = client && next()));
  app.use("/users", userRouter);

  //route not found handler middleware

  app.use("*", (req, res, next) => {
    const error = { status: 404, message: "route not defined" };
    next(error);
  });

  //global error handler middleware
  app.use((error, req, res, next) => {
    const { status, message } = error;
    res.status(status || 500).json({ status, message });
  });

  app.listen(process.env.PORT || 4000, async () => {
    console.log(`Server Running ${process.env.PORT}`), await db();
  });
};

main();
