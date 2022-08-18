import express from "express";
import paymentController from "../PaymentController";

export const paymentRouter = express.Router();


paymentRouter.post("/create", paymentController.paymentRegister);

paymentRouter.get("/getstatus", paymentController.getPaymentStatus)