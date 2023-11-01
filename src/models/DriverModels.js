import mongoose from 'mongoose'
const { Schema,  } = mongoose

const Drivers = new Schema({
    _id: String,
    name : String,
    email : String,
    phone_number: String,
    license_number: String,
    role: String,
    password: String,
}) ;

const DriverModel = mongoose.model('Drivers', Drivers)

export default DriverModel;