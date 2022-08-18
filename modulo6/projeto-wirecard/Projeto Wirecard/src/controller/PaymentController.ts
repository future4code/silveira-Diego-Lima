import { Request, Response } from "express";
import PaymentBusiness from "../business/PaymentBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { PaymetInputDTO } from "../model/Payment";


export class PaymentController {

    public paymentRegister = async (req: Request, res: Response) => {

        try {
            const { clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv } = req.body
            const token = req.headers.authorization as string
            const input: PaymetInputDTO = {
                clientId,
                amount,
                type,
                cardHolderName,
                cardNumber,
                cardExpirationDate,
                cardCvv
            }

            const payment = await PaymentBusiness.registerPayment(input, token)

            res.status(201).send({ message: payment })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    public getPaymentStatus = async (req: Request, res: Response) => {

        try {
            const token = req.headers.authorization as string
            const id = req.body

            const paymentStatus = await PaymentBusiness.getPayment(id, token)

            res.status(200).send({ message: paymentStatus })


        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

}

export default new PaymentController()