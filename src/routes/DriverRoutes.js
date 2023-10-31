import { Router } from "express";
import { allDrivers, newDriver, updateDriver, deleteDriver} from "../controllers/DriverController.js";

const driverRouter =  Router();

driverRouter.get('/', allDrivers);
driverRouter.post('/', newDriver);
driverRouter.put('/:driverId', updateDriver);
driverRouter.delete('/:driverId', deleteDriver)


export default driverRouter;