import { Router } from "express";
import {
	allvehicles,
	insertvehicle,
	updatevehicle,
	deletevehicle,
} from "../controllers/vehicleController.js";

const vehicleRouter = Router();

vehicleRouter.get("/", allvehicles);
vehicleRouter.post("/", insertvehicle);
vehicleRouter.put("/:vehicleId", updatevehicle);
vehicleRouter.delete("/:vehicleId", deletevehicle);

export default vehicleRouter;
