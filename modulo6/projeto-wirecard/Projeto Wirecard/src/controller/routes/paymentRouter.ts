import express from "express";
import paymentController from "../PaymentController";

export const paymentRouter = express.Router();


paymentRouter.post("/register", paymentController.getBand);

paymentRouter.get("/getband", paymentController.getBand)