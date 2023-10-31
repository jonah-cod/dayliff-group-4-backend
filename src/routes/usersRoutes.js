import { Router } from "express";
import { loginController, signupController } from "../controllers/usersController.js";
export const userRouter =  Router() 

userRouter.post('/login', loginController)
userRouter.post('/signup', signupController)


// signup {email, phonenumber, full names, password, role /driver/admin, }
// driver/ get all drivers
//



