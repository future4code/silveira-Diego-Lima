import { Request, Response } from "express"
import PostBusiness from "../Business/PostBusiness"
import { PostInputDTO } from "../model/Posts"


export default class PostController {

    constructor(
        private postBusiness: PostBusiness
    ) { }

    public createPost = async (req: Request, res: Response) => {

        try {
            const { photo, description, type } = req.body

            const token: string = req.headers.authorization as string

            const newPost: PostInputDTO = {
                photo,
                description,
                type
            }

            const post = await this.postBusiness.create(newPost, token)

            res.status(201).send({ message: "Post criado com sucesso", post })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }

    }
    public getPost = async (req: Request, res: Response) => {
        try {
            const token: string = req.headers.authorization as string
            const id = req.params.id as string

            
            const post = await this.postBusiness.getPostById(id, token)


            res.status(200).send(post)

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }


}

