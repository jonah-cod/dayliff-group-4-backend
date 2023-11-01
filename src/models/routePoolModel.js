import mongoose from "mongoose";

const { Schema } = mongoose;

const RoutePlanSchema = new Schema({
      _id: String,
      route_pool_name: String,// route name + Day
      route_id: String,
      driver_id: String,
      status: String,
      created_at: Date,
      completed_at: Date
})

export const RoutePoolModel = mongoose.model("route_plans", RoutePlanSchema);