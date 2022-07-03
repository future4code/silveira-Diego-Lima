import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import Authenticator from "../services/Authenticator"



export async function followUser(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const token = req.headers.authorization
        const {idSeguido} = req.body
        
        if (!token || !idSeguido) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers e 'ID' do usuário a ser seguido")
        }
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)         

        if(!tokenData){
            errorCode = 401
            throw new Error("Token inválido")
        }        
        const userAlreadyExist = await new UserDataBase().getUserProfile(idSeguido)

        if(!userAlreadyExist){
            errorCode = 404
            throw new Error(`Usuário ${idSeguido} não encontrado !`)
        }

        await new UserDataBase().followUser(tokenData.id, idSeguido)

        res.status(200).send({message:`Usuário seguindo pessoa com id ${idSeguido} com sucesso`})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }


}