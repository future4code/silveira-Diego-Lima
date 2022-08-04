import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";


export class PaymentController {

     public paymentRegister = async (req: Request, res: Response) => {
        try {
            const {name, email, cpf, amount, type, card} = req.body
            

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

    public getBand = async (req: Request, res: Response) => {
        
        try {
            

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