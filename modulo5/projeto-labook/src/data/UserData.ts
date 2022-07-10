import { Users } from "../model/Users";
import BaseDataBase from "./BaseDataBase";

export class UserData extends BaseDataBase {

    private static TABLE_NAME = "labook_users"

    public async createUser(user: Users): Promise<void> {
        try {
            await BaseDataBase.connection()
                .insert({
                    id: user.getId(),
                    email: user.getEmail(),
                    name: user.getName(),
                    password: user.getPassword()                    
                })
                .into(UserData.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findUserByEmail(email: string): Promise<Users> {
        try {
            const user = await BaseDataBase.connection()
                .select('*')
                .from(UserData.TABLE_NAME)
                .where({ email });
            return user[0] && Users.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    

}