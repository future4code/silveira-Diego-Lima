import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";


export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'name', 'email', e 'password'")
        }


        const idGenetator = new IdGenerator();
        const id = idGenetator.generate();


    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}