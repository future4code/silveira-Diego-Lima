import { Posts } from "../model/Posts";
import { Post } from "../model/types";
import BaseDataBase from "./BaseDataBase";

export class PostData extends BaseDataBase {
    public async createPost(post: Posts): Promise<void> {
        try {
            await BaseDataBase.connection("labook_posts")
                .insert({
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    type: post.getType(),
                    created_at:post.getCreated(),
                    author_id:post.getAuthor()                    
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findPostById(id: string): Promise<Post> {
        try {
            const post = await BaseDataBase.connection("labook_posts")
                .select('*')
                .where({ id });
            return post[0] && Posts.toPostModel(post[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    

}