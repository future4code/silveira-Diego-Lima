import { UserData } from "../data/UserData"
import { userInput, userLogin } from "../model/types"
import { Users } from "../model/Users"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


class UserBusiness {

    async signup(user: userInput) {
        let errorCode: number = 400

        const { name, email, password } = user
        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'name', 'email' e 'password' ")
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }
        if (password.length < 6) {
            throw new Error("Password deve ter pelo menos 6 caracteres");
        }

        const id = new IdGenerator().generate();

        const hashPassword = await new HashManager().hash(password)

        const newUser = new Users(id, name, email, hashPassword)
        await new UserData().createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

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
        const token = authenticator.generateToken({ id: user.getId()})

        return token
    }
    
}
export default UserBusiness;