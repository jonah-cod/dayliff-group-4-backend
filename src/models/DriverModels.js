import mongoose from 'mongoose'
const { Schema,  } = mongoose

const Drivers = new Schema({
    name : String,
    driverId : Number,
    email : String,
    phone: Number,
    vehicleAssigned: String,
    role: String,
    password: String,
}) ;

const DriverModel = mongoose.model('Drivers', Drivers)

export default DriverModel;