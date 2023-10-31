import { Router } from "express";
import { getAllOrders, 
         newOrderController, 
         updateOrderController, 
         deleteOrderController } from "../controllers/orderController.js";

const orderRoutes = Router();

orderRoutes.get('/', getAllOrders);
orderRoutes.post('/', newOrderController);
orderRoutes.put('/',  updateOrderController);
orderRoutes.delete('/:order_id', deleteOrderController)

export default orderRoutes;