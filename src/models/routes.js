import mongoose from "mongoose";

const { Schema } = mongoose;  

let routeSchema = new Schema({
      _id: String,
      route_name: String,
      origin_address: {lat: String, long: String},
      destination_address: {lat: String, long: String},
      route_cost:String, 
      distance_in_km: Number,
      estimated_duration_minutes: Number,
      orders: [{type: Schema.Types.ObjectId, ref: "OrderModel",default: null}],
      created_at: Date,
      updated_at: Date
})

let RouteModel = mongoose.model('routes', routeSchema);

export default RouteModel;