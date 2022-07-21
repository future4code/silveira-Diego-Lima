import express from "express";
import DogController from "../DogController";



export const dogRouter = express.Router();


dogRouter.get("/list", DogController.getIndex);

dogRouter.post("/create", DogController.create);

