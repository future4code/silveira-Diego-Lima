import { PostData } from "../data/PostData";
import { Posts } from "../model/Posts";
import { PostInput } from "../model/types";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

class PostBusiness {

    async create(input: PostInput, token: string) {
        let errorCode: number = 400

        const { photo, description, type } = input

        if (!photo || !description || !type) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'photo', 'description' e 'type' ")
        }
        if (!token) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers")
        }
        const id = new IdGenerator().generate();

        const createdAt = new Date()

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData) {
            errorCode = 401
            throw new Error("Token inválido")
        }

        const newPost = new Posts(id, photo, description, type, createdAt, tokenData.id)

        await new PostData().createPost(newPost)
    }

    async getPostById(id: string, token: string) {
        let errorCode: number = 400

        if (!token || !id) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers e 'ID' do post por params")
        }
        const tokenData = new Authenticator().getTokenData(token)
        if (!tokenData) {
            errorCode = 401
            throw new Error("Token inválido")
        }
        const post = await new PostData().findPostById(id)

        return post
    }
}
export default PostBusiness;