import mongoose from "mongoose";

const { Schema } = mongoose;  

let routeSchema = new Schema({
      route_id: String,
      origin_address: {lat: String, long: String},
      destination_address: {lat: String, long: String},
      distance_in_km: Number,
      estimated_duration_minutes: Number,
      created_at: Date,
      updated_at: Date
})

let RouteModel = mongoose.model('routes', routeSchema);

export default RouteModel;