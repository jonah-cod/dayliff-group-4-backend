import mongoose from 'mongoose';
const { Schema,  } = mongoose;
//create orders schema
const orderSchema  = new Schema({
      order_id: {type: Number, require:true},
      customer_name: String,
      customer_phone: Number,
      delivery_date: {type: Date},
      destination_address: {
            lat: String,
            long: String
      },
      order_status: String,
      route_id: Number,
      created_at: {type: Date},
      updated_at: {type: Date},
});

//create order model with the schema

const OrderModel = mongoose.model('orders', orderSchema);

export default OrderModel;


