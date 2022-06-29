import { User } from "../model/Types";
import BaseDataBase from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public async findUserByEmail(email:string): Promise<User> {
        try {
            const user = await BaseDataBase.connection("")
            .select('*')
            .where({email});

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}