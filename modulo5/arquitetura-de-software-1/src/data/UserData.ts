import { Users } from "../model/Users";
import BaseDataBase from "./BaseDataBase";

export class UserData extends BaseDataBase {
    public async createUser(user: Users): Promise<void> {
        try {
            await BaseDataBase.connection("User_Arq")
                .insert({
                    id: user.getId(),
                    email: user.getEmail(),
                    name: user.getName(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findUserByEmail(email: string): Promise<Users> {
        try {
            const user = await BaseDataBase.connection("User_Arq")
                .select('*')
                .where({ email });
            return user[0] && Users.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getAll(): Promise<Users[]> {
        try {
            const users = await BaseDataBase.connection("User_Arq")
                .select('*')

            return users.map((user => Users.toUserModel(user)))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async deleteUserById(id: string): Promise<void> {
        try {
            await BaseDataBase.connection("User_Arq")
                .where({ id })
                .del()

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}