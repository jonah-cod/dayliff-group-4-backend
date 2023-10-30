import express from "express";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { config } from "./config/config.js";
import { userRouter } from "./routes/usersRoutes.js";

dotenv.config();

async function appStartUp() {
  const app = express();

  app.use(express.json());
  const client = new MongoClient(config.dbUrl);
  try {
    await client.connect();

    console.log("App Connected to Mongo DB");

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

    const port = process.env.PORT || 3500;

    app.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
    
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

appStartUp();
