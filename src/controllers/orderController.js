import OrderModel from "../models/order.js";
import { idGenerator } from "../utilities/idGenerator.js";


export async function getAllOrders(req, res) {
      let orders = await OrderModel.find();
    
      res.json(orders);
    }



export async function newOrderController(req, res) {
  let order = req.body;

  try {
    //create a model out of the body parsed
    let newOrder = new OrderModel({ ...order, _id: idGenerator() });
    let result = await newOrder.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

export async function updateOrderController(req, res) {
  let order = req.body;

  try {
    let updateOrder = new OrderModel(order);
    let result = await OrderModel.findOneAndUpdate({
      _id: order._id,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}


export async function deleteOrderController(req, res) {
  let { order_id } = req.params;
  try {
    let ackDelete = await OrderModel.deleteOne({ _id:order_id });
    res.json(ackDelete);
  } catch (error) {
    console.log(error);
  }
}
