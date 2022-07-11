import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import Authenticator from "../services/Authenticator"



export async function getProfileById(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const id = req.params.id as string
        const token = req.headers.authorization
        if (!token || !id) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers e 'ID' do usuário por params")
        }
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)         

        if(!tokenData){
            errorCode = 401
            throw new Error("Token inválido")
        }
        
        const userDataBase = new UserDataBase()
        const user = await userDataBase.getUserProfile(id)

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }


}