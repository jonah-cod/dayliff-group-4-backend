import mongoose from 'mongoose';
const { Schema,  } = mongoose;
//create orders schema
const orderSchema  = new Schema({
      _id: String,
      customer_name: String,
      customer_phone: Number,
      delivery_date: {type: Date},
      order_date: {type: Date},
      address_name: String,
      destination_address: {
            lat: String,
            long: String
      },
      order_status: String,
      route_id: {type: Schema.Types.ObjectId, ref: "RouteModel",default: null},
      updated_at: {type: Date},
});

//create order model with the schema

const OrderModel = mongoose.model('orders', orderSchema);

export default OrderModel;


