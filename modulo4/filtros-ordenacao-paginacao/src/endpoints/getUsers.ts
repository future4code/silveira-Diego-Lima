import { Request, Response } from "express"
import selectUsers from "../data/selectUsers"




export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string
        let order = req.query.order == "type" ? "type" : "name"
        let sort = req.query.sort == "ASC" ? "ASC" : "DESC"
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        let size = 3
        let offset = size * (page - 1)
        
        
        const users = await selectUsers(name, order, sort,size,offset)

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
