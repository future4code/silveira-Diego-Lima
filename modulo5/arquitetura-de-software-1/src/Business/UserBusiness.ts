import { Request, Response } from "express"
import { UserData } from "../data/UserData"
import { Users } from "../model/Users"
import Authenticator from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { userInput, userLogin } from "../types"

class UserBusiness {

    async signup(user: userInput) {
        let errorCode: number = 400

        const { name, email, password, role } = user
        if (!name || !email || !password || !role) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'name', 'email', 'password' e 'role' ")
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }
        if (password.length < 6) {
            throw new Error("Password deve ter pelo menos 6 caracteres");
        }

        const id = new IdGenerator().generate();

        const hashPassword = await new HashManager().hash(password)

        const newUser = new Users(id, name, email, hashPassword, role)
        await new UserData().createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id, role: role })

        return token

    }
    async login(login: userLogin) {
        let errorCode: number = 400
        const { email, password } = login

        if (!email || !password) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'name', 'email', 'password' e 'role' ")
        }
        const userData = new UserData()
        const user = await userData.findUserByEmail(email)
        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (!user || !passwordIsCorrect) {
            errorCode = 401
            throw new Error("Credenciais de acesso inválidas");
        }
        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

        return token
    }
    async getAllUsers(token: string) {

        if (!token) {
            throw new Error("Esse endpoint exige uma autorização através do headers")
        }
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token inválido")
        }
        const userData = new UserData()
        const user = await userData.getAll()

        return user

    }

    async deleteUser(token: string, id: string) {
        if (!token) {
            throw new Error("Esse endpoint exige uma autorização através do headers")
        }
        if (!id) {
            throw new Error("Esse endpoint exige id passado no params")
        }
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token inválido")
        }
        if (tokenData.role !== 'ADMIN') {
            throw new Error("Somente administradores podem acessar esta funcionalidade")
        }

        const userData = new UserData()
        const userDeletado = await userData.deleteUserById(id)

        return `Usuário ${id} deletado com sucesso`
    }
}
export default UserBusiness;