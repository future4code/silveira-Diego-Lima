import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { userInputDTO, userLoginDTO } from "../model/Users";



export default class UserController {

    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body

            const newUser: userInputDTO = {
                name,
                email,
                password
            }

            const token = await this.userBusiness.signup(newUser)

            res.status(201).send({ message: "Usuário cadastrado com sucesso", token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }

    }
    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            const user: userLoginDTO = {
                email,
                password,
            }

            const token = await this.userBusiness.login(user)

            res.status(200).send({ message: "Usuário logado com sucesso", token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

}
