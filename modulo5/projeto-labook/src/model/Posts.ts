
export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
export class Posts {

    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private created_at: Date,
        private author_id: string
    ) { }
    public getId = () => this.id
    public getPhoto = () => this.photo
    public getDescription = () => this.description
    public getType = () => this.type
    public getCreated = () => this.created_at
    public getAuthor = () => this.author_id



    static toPostModel(data: any): Posts {
        return new Posts(data.id, data.photo, data.description, data.type, data.created_at, data.author_id);
    }
}


export interface Post {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export type PostInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES
}