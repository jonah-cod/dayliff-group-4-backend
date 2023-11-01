import { idGenerator } from "../utilities/idGenerator.js";
import vehicleModel from "../models/vehicleModels.js";

export async function insertvehicle(req, res) {
	const vehicle = req.body;
	try {
		const insertvehicle = new vehicleModel({...vehicle, vehicleId: idGenerator()});
		await insertvehicle.save();
		res.json({ success: true, message: "vehicle saved" });
	} catch (error) {
		console.log(error);
	}
}

export async function updatevehicle(req, res) {
    const { vehicleId } = req.params
	const vehicle = req.body;
	try {
		await vehicleModel.updateOne(
			{ vehicleId: vehicleId },
			vehicle
		);
		res.json({success: true, messages: "vehicle updated"});
	} catch (err) {
		console.err(err);
	}
}

export async function allvehicles(req, res) {
	try {
		const vehicles = await vehicleModel.find();
			res.json(vehicles);
	} catch (error) {
		console.log(error);
	}
}

export async function deletevehicle(req, res) {
	const { vehicleId } = req.params;

	try {
		const results = await vehicleModel.deleteOne({ vehicleId });
        let { deletedCount, acknowledged} = results;
        if (acknowledged && deletedCount) {
            res.json({success: true, message:"vehicle deleted"});
        }else{
            res.json({success: false, message: "failed"})
        }
		
	} catch (error) {
		console.log(error);
	}
}