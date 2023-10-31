import mongoose from "mongoose";
import { config } from "./config.js";

const connect = async () => {
  // connect to DB
  mongoose.set("strictQuery", false);
  const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const mongodbUri = config.dbUrl;
  await mongoose.connect(mongodbUri, mongoOptions);
  const conn = mongoose.connection;
  conn.on("error", console.error.bind(console, "connection error:"));
};

export default connect;
