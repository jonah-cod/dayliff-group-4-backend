import { Router } from "express";
import { deleteRouteController, getRoutesControllers, postNewRouteController, updateRouteController } from "../controllers/routesControllers.js";


const routesRouter = Router();

routesRouter.get('/', getRoutesControllers);
routesRouter.post('/', postNewRouteController);
routesRouter.put('/:route_id', updateRouteController);
routesRouter.delete('/:route_id', deleteRouteController);

export default routesRouter;