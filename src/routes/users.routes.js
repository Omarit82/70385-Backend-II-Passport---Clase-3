import passport from "passport";
import { register,login } from "../controllers/users.controller.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register',passport.authenticate('register'),register);
userRouter.post('/login',passport.authenticate('login'),login);


export default userRouter;