import { UserData } from "../data/UserData"
import { userInputDTO, userLoginDTO, Users } from "../model/Users"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    constructor(
        private userData:UserData,
        private idGenerator: IdGenerator,
        private hashManager : HashManager,
        private authenticator : Authenticator
    ){}

    public signup = async (user: userInputDTO) => {
        

        try {
            const { name, email, password } = user
            if (!name || !email || !password) {
                throw new Error("Preencha todos os campos 'name', 'email' e 'password' ")
            }
            if (email.indexOf("@") === -1) {
                throw new Error("Email inválido");
            }
            if (password.length < 6) {
                throw new Error("Password deve ter pelo menos 6 caracteres");
            }
            
            const userFromDB = await this.userData.findUserByEmail(email)
            if (userFromDB) {
                throw new Error("Email já cadastrado!");
            }
            
            const id = this.idGenerator.generate();

            const hashPassword = await this.hashManager.hash(password)

            const newUser = new Users(id, name, email, hashPassword)
            
            await this.userData.createUser(newUser)

            
            const token = this.authenticator.generateToken({ id })

            return token

        } catch (error: any) {
            throw new Error(error.message);
        }

    }
    public login = async (login: userLoginDTO) => {

        try {
            const { email, password } = login

            if (!email || !password) {
                throw new Error("Preencha os campos 'email' e 'password' ")
            }
            
            const userFromDB = await this.userData.findUserByEmail(email)
            if (!userFromDB) {
                throw new Error("Email não cadastrado!");
            }
           
            const passwordIsCorrect = await this.hashManager.compare(password, userFromDB.getPassword())

            if (!passwordIsCorrect) {
                throw new Error("Senha inválida");
            }
            
            const token = this.authenticator.generateToken({ id: userFromDB.getId() })

            return token

        } catch (error: any) {
            throw new Error(error.message);
        }

    }

}
