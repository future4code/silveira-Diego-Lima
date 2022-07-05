import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { userInput, userLogin } from "../model/types";


class UserController {
    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password} = req.body
            const userBusiness = new UserBusiness()

            const newUser: userInput = {
                name,
                email,
                password                
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
    
    
}

export default UserController