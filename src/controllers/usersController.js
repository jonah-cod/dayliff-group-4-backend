import { config } from "../config/config.js";
import DriverModel from "../models/DriverModels.js";

import UserModel from "../models/userModel.js";
import { comparePWD, encryptPWD } from "../utilities/encryptor.js";
import { generateToken, verifyToken } from "../utilities/tokenUtility.js";


export async function loginController(req, res){
      let { password, phone_number} = req.body;
      try {
            let userFound = await UserModel.find({phone_number});
            let driverFound = await DriverModel.find({phone_number});

            let availableUser = userFound.length? userFound[0] : driverFound.length? driverFound[0] : undefined;

            if (availableUser !== undefined) {
                  console.log(availableUser)
                  let pwdMatch = await comparePWD(password,availableUser.password);
                  let token = "";
                  pwdMatch? token = await generateToken(availableUser) && res.json({succes: true, message: "logged in", token}) : res.json({succes: false, message: "false credentials"})
            }else{
                  res.json({success: true, message: "no user found"})
            }
      } catch (error) {
            console.log(error)
      }
}

export async function signupController(req, res){
      const user = req.body;
      try {
            let encryptedPWD = await encryptPWD(user.password)
            let new_user = new UserModel({...user, password: encryptedPWD});
            await new_user.save()
            res.json({success: true, message: "user saved"})
      } catch (error) {
            console.log(error);
      }


}