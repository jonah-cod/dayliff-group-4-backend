import mongoose from 'mongoose'
const { Schema,  } = mongoose

const Drivers = new Schema({
    name : String,
    email : String,
    phone_number: Number,
    license_number: String,
    role: String,
    password: String,
}) ;

const DriverModel = mongoose.model('Drivers', Drivers)

export default DriverModel;