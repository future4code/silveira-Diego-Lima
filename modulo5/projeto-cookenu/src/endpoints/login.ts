import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import Authenticator from "../services/Authenticator"
import { HashManager } from "../services/HashManager"


export async function login(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const { email, password } = req.body
        if (!email || !password) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'email', e 'password'")
        }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (!user || !passwordIsCorrect) {
            errorCode = 401
            throw new Error("Credenciais de acesso inválidas");
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId() })

        res.status(200).send({ message: 'Usuário logado com sucesso', token: token });

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }

}