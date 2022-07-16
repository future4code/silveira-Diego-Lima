import express from "express";
import UserBusiness from "../../Business/UserBusiness";
import { UserData } from "../../data/UserData";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import UserController from "../UserController";

export const userRouter = express.Router()

const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)
const userController = new UserController(
    userBusiness
);

userRouter.post("/signup", userController.signUp)

userRouter.post("/login", userController.login)