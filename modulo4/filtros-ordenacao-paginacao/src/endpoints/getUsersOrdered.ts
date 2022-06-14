import { Request, Response } from "express"
import selectUsersOrdered from "../data/selectUsersOrdered"



export const getUsersOrdered = async (req: Request, res: Response): Promise<void> => {
    try {
        let order = req.query.order == "name" ? "name" : "type" || "type" ? "type" : "name"
        let sort = req.query.sort == "ASC" ? "ASC" : "email"
        
        
        const users = await selectUsersOrdered(order, sort)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
