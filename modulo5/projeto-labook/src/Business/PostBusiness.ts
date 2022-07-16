import { PostData } from "../data/PostData";
import { PostInputDTO, Posts, POST_TYPES } from "../model/Posts";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export default class PostBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private postDatabase: PostData,
        private authenticador: Authenticator
    ) { }

    public create = async (input: PostInputDTO, token: string) => {

        try {
            const { photo, description, type } = input

            if (!description || !type) {
                throw new Error("Preencha os campos 'description' e 'type' ")
            }
            if (!token) {
                throw new Error("Insira um token através do headers")
            }
            if (type !== POST_TYPES.NORMAL && type !== POST_TYPES.EVENT) {
                throw new Error("Tipo informado é inválido preencha com valores 'normal ou 'evento'.")
            }

            const tokenData = this.authenticador.getTokenData(token)

            if (!tokenData) {
                throw new Error("Token inválido")
            }
            const id = this.idGenerator.generate();

            const createdAt = new Date()

            const newPost = new Posts(id, photo, description, type, createdAt, tokenData.id)

            await this.postDatabase.createPost(newPost)

            return newPost

        } catch (error: any) {
            throw new Error(error.message);
        }

    }

    public getPostById = async (id: string, token: string) => {

        try {
            if (!token || !id) {
                throw new Error("Esse endpoint exige uma autorização através do headers e 'ID' do post por params")
            }
            const tokenData = this.authenticador.getTokenData(token)
            if (!tokenData) {
                throw new Error("Token inválido")
            }
            const post = await this.postDatabase.findPostById(id)
            if (!post) {
                throw new Error("Não existe nenhum post com este ID")
            }

            return post

        } catch (error: any) {
            throw new Error(error.message);
        }

    }
}
