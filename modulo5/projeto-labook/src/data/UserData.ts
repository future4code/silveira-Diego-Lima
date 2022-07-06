import { Users } from "../model/Users";
import BaseDataBase from "./BaseDataBase";

export class UserData extends BaseDataBase {
    public async createUser(user: Users): Promise<void> {
        try {
            await BaseDataBase.connection("labook_users")
                .insert({
                    id: user.getId(),
                    email: user.getEmail(),
                    name: user.getName(),
                    password: user.getPassword()                    
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findUserByEmail(email: string): Promise<Users> {
        try {
            const user = await BaseDataBase.connection("labook_users")
                .select('*')
                .where({ email });
            return user[0] && Users.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    

}