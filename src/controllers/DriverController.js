import { idGenerator } from "../utilities/idGenerator.js";

import DriverModel from "../models/DriverModels.js";

export async function newDriver(req, res) {
	const driver = req.body;
	try {
		const newDriver = new DriverModel({...driver, driverId: idGenerator()});
		await newDriver.save();
		res.json({ success: true, message: "driver saved" });
	} catch (error) {
		console.log(error);
	}
	// await newDriver.save();
}

export async function updateDriver(req, res) {
    const { driverId } = req.params
	const driver = req.body;
	try {
		await DriverModel.findOneAndUpdate(
			{ driverId: driverId },
			driver
		);
		res.json({success: true, messages: "driver updated"});
	} catch (err) {
		console.err(err);
	}
}

export async function allDrivers(req, res) {
	try {
		const drivers = await DriverModel.find();
		res.json(drivers);
	} catch (error) {
		console.log(error);
	}
}

export async function deleteDriver(req, res) {
	const { driverId } = req.params;

	try {
		const results = await DriverModel.deleteOne({ driverId });
        let { deletedCount, acknowledged} = results;
        if (acknowledged && deletedCount) {
            res.json({success: true, message:"driver deleted"});
        }else{
            res.json({success: false, message: "failed"})
        }
		
	} catch (error) {
		console.log(error);
	}
}
