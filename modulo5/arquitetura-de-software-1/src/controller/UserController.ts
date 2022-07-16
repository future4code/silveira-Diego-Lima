import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { userInput, userLogin } from "../types";

class UserController {
    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body
            const userBusiness = new UserBusiness()

            const newUser: userInput = {
                name,
                email,
                password,
                role
            }

            const token = await userBusiness.signup(newUser)

            res.status(201).send({ message: "Usuário cadastrado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }

    }
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const userBusiness = new UserBusiness()
            const user: userLogin = {
                email,
                password,
            }

            const token = await userBusiness.login(user)

            res.status(201).send({ message: "Usuário logado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async getAllUsers(req: Request, res: Response) {

        try {
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness()

            const users = await userBusiness.getAllUsers(token)

            res.status(200).send(users)

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async deleteUser(req: Request, res: Response) {

        try {
            const id = req.params.id as string
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness()

            const userDeletado = await userBusiness.deleteUser(token, id)

            res.status(201).send({ message: userDeletado })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}

export default UserController