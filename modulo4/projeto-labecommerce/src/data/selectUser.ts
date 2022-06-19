import { userData } from "../Types/typesUser";
import { connection } from "./connection";



export default async function selectUser(userId: string): Promise<userData> {

    const user  = await connection("labecommerce_users")
        .where({id: userId})

        return user[0]

}