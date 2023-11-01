import { config } from "../config/config.js";
import DriverModel from "../models/DriverModels.js";

import UserModel from "../models/userModel.js";
import { comparePWD, encryptPWD } from "../utilities/encryptor.js";
import { idGenerator } from "../utilities/idGenerator.js";
import { generateToken, verifyToken } from "../utilities/tokenUtility.js";

export async function getUSersController(req, res) {
	try {
		let users = await UserModel.find();
		res.json(users);
	} catch (error) {
		console.log(error);
	}
}

export async function loginController(req, res) {
	let { password, phone_number } = req.body;
	try {
		let userFound = await UserModel.find({phone_number });
		let driverFound = await DriverModel.find({phone_number });

		let availableUser = userFound.length
			? userFound[0]
			: driverFound.length
			? driverFound[0]
			: undefined;

		if (availableUser !== undefined) {
			let pwdMatch = await comparePWD(password, availableUser.password);
			let token = await generateToken(availableUser);
			pwdMatch
				? res.json({ succes: true, message: "logged in", token })
				: res.status(403).json({ succes: false, message: "false credentials" });
		} else {
			res.status(404).json({ success: false, message: "no user found" });
		}
	} catch (error) {
		console.log(error);
	}
}

export async function signupController(req, res) {
	const user = req.body;
	try {
		let encryptedPWD = await encryptPWD(user.password);
		let new_user = new UserModel({
			...user,
			password: encryptedPWD,
			_id: idGenerator(),
		});
		await new_user.save();
		res.json({ success: true, message: "user saved" });
	} catch (error) {
		console.log(error);
	}
}

export async function updateUserController(req, res) {
	try {
            let { user_id} = req.params;
		let updatedUser = req.body;
		await UserModel.findOneAndUpdate({ _id:user_id }, updatedUser);
            res.json({success: true, message: "user updated"})
	} catch (error) {
		console.log(error);
	}
}

export async function deleteUserController(req, res) {
	let { user_id } = req.params;
	try {
		let result = await UserModel.deleteOne({ _id:user_id });
		let { deletedCount, acknowledged } = result;
		if (acknowledged && deletedCount) {
			res.json({ success: true, message: "user deleted" });
		} else {
			res.json({ success: false, message: "failed" });
		}
	} catch (error) {
		console.log(error)
	}
}
