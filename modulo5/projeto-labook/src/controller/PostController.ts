import { Request, Response } from "express"
import PostBusiness from "../Business/PostBusiness"
import { Post, PostInput } from "../model/types"

class PostController {
    async createPost(req: Request, res: Response) {
        try {
            const { photo, description, type } = req.body

            const token: string = req.headers.authorization as string

            const postBussiness = new PostBusiness()

            const newPost: PostInput = {
                photo,
                description,
                type
            }

            const post = await postBussiness.create(newPost, token)

            res.status(201).send({ message: "Post criado com sucesso" })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }

    }
    async getPost(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization as string
            const id = req.params.id as string

            const postBussiness = new PostBusiness()

            const post = await postBussiness.getPostById(id, token)


            res.status(200).send(post)

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }


}

export default PostController