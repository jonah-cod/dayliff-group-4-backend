// const express = require("express");
// const app = express();

import DriverModel from "../models/DriverModels.js";
import DriveModel from "../models/DriverModels.js";
 
export async function newDriver (req, res) {
    const { driverId, name, email, phone, assigned_vehicle, role} =req.body;
    const newDriver = DriveModel.create({driverId, name, email, phone, assigned_vehicle, role})
    res.json(newDriver)
    // await newDriver.save();

}

export async function updateDriver (req, res)  {
    const Driver = req.body;
    try{
        const updateDriver = new DriveModel(Driver) 
        await DriveModel.findOneAndUpdate({ DriverId: driverRouter.DriverId });
    } catch (err) {
            console.err(err)
       }
    }


export async function allDrivers(req, res) {
    const drivers = await DriverModel.find();
    console.log(drivers)
    res.json(drivers);
    // res.send(drivers.toString());
    }


export async function deleteDriver(req, res) {
    const { driverId } = req.params;
      
    try {
        const driDelete = await DriverModel.findByIdAndDelete(driverId);
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}