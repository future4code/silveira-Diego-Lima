import { User } from "../../src/model/User";

const user ={
    id:"123456789",
    name: "Diego Eduardo Lima",
    email:"diego@email.com",
    password:"123456",
    cpf:"9090901452"
}

export class UserDatabaseMock {
    public async getUserByEmail(email: string): Promise<User> {

        return User.toUserModel(user)
    }   
   
       
}