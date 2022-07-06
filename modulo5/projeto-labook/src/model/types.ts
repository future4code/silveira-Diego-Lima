
export type userInput = {
    name: string,
    email: string,
    password: string
}

export type userLogin = {
    email: string,
    password: string
}

enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export type PostInput = {
    photo: string,
    description: string,
    type: POST_TYPES
}