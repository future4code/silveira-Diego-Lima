import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"



export async function getProfileById(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const id = req.params.id as string
        const token = req.headers.authorization
        if (!token || !id) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers e 'ID' do usuário por params")
        }

        const userDataBase = new UserDataBase()
        const user = await userDataBase.getProfile(id)

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }


}