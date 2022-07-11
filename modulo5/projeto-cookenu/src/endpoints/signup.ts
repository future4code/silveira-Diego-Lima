import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Users } from "../model/Users";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export async function signup(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const { name, email, password } = req.body
        if (!name || !email) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'name', 'email', e 'password'")
        }
        if (!password || password.length < 6) {
            errorCode = 422
            throw new Error("password inválido ");
        }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)
        if (user) {
            errorCode = 409
            throw new Error("Esse email já esta cadastrado");
        }
        const idGenetator = new IdGenerator();
        const id = idGenetator.generate();

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new Users(id, name, email, hashPassword)
        await userDataBase.createUser(newUser);

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id })

        res.status(200).send({ message: 'Usuário cadastrado com sucesso', access_token: token });

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }

}