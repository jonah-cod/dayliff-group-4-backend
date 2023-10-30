import { Router } from "express";
import { loginController } from "../controllers/usersController";
export const userRouter =  Router() 

userRouter.get('/login', loginController)



