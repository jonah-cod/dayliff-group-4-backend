import { Router } from "express";
import { loginController } from "../controllers/usersController.js";
export const userRouter =  Router() 

userRouter.get('/login', loginController)



// signup {email, phonenumber, full names, password, role /driver/admin, }
// driver/ get all drivers
//



