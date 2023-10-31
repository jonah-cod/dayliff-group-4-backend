import { Router } from "express";
import { deleteRouteController, getRoutesControllers, postNewRouteController, updateRouteController } from "../controllers/routesControllers.js";


const routesRouter = Router();

routesRouter.get('/', getRoutesControllers);
routesRouter.post('/', postNewRouteController);
routesRouter.put('/', updateRouteController);
routesRouter.post('/:route_id', deleteRouteController);

export default routesRouter;