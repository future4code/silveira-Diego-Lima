import { Post, Posts } from "../model/Posts";
import BaseDataBase from "./BaseDataBase";

export class PostData extends BaseDataBase {

    private static TABLE_NAME = "labook_posts"

    public async createPost(post: Posts): Promise<void> {
        try {
            await BaseDataBase.connection()
                .insert({
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    type: post.getType(),
                    created_at:post.getCreated(),
                    author_id:post.getAuthor()                    
                }).into(PostData.TABLE_NAME)
                
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findPostById(id: string): Promise<Post> {
        try {
            const post = await BaseDataBase.connection()
                .select('*')
                .from(PostData.TABLE_NAME)
                .where({ id });
            return post[0] && Posts.toPostModel(post[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    

}