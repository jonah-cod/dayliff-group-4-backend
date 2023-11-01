import mongoose from 'mongoose'
const { Schema } = mongoose

const vehicle  = new Schema({
    vehicles_type : String,
    plate_number : String,
    tonnage: String,
    status: String,
    created_at: Date,
    updated_at: Date
});

const vehicleModel = mongoose.model('vehicles', vehicle)

export default vehicleModel;