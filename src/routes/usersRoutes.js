import { Router } from "express";
import { loginController, signupController, getUSersController, deleteUserController, updateUserController } from "../controllers/usersController.js";
export const userRouter =  Router() 

userRouter.get('/', getUSersController);
userRouter.post('/login', loginController);
userRouter.post('/signup', signupController);
userRouter.put("/:user_id", updateUserController);
userRouter.delete('/:user_id', deleteUserController);



// signup {email, phonenumber, full names, password, role /driver/admin, }
// driver/ get all drivers
//
