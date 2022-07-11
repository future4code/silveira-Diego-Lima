import { Users } from "../model/Users";
import BaseDataBase from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public async createUser(user: Users): Promise<void> {
        try {
            await BaseDataBase.connection("cookenu_users")
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findUserByEmail(email: string): Promise<Users> {
        try {
            const user = await BaseDataBase.connection("cookenu_users")
                .select('*')
                .where({ email });
            return user[0] && Users.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getUserProfile(id: string): Promise<Users> {
        try {
            const user = await BaseDataBase.connection("cookenu_users")
                .select('id', 'name', 'email')
                .where({ id });
            return Users.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async followUser(id_seguir: string, id_seguido: string): Promise<void> {
        try {
            await BaseDataBase.connection("cookenu_users_follow")
                .insert({
                    id_seguir,
                    id_seguido
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}