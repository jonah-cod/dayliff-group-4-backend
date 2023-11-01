import mongoose from 'mongoose'
const { Schema,  } = mongoose

const Drivers = new Schema({
    name : String,
    driverId : String,
    email : String,
    phone_number: Number,
    vehicleAssigned: String,
    role: String,
    password: String,
}) ;

const DriverModel = mongoose.model('Drivers', Drivers)

export default DriverModel;