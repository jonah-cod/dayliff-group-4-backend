import { MongoClient } from "mongodb";
import { config } from "../config/config.js";

const mongoClient = new MongoClient(config.dbUrl)

export function loginController(req, res){
      res.send("login route");
}

export function signupController(req, res){
      const usersColletion = mongoClient.db().collection("users");
      usersColletion.insertOne({name: "jane doe", email: "janedoe@gmail.com"})
}