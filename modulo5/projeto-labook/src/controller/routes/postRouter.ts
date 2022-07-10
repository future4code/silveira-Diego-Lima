import express from "express";
import PostBusiness from "../../Business/PostBusiness";
import { PostData } from "../../data/PostData";
import { Authenticator } from "../../services/Authenticator";
import { IdGenerator } from "../../services/IdGenerator";
import PostController from "../PostController";

export const postRouter = express.Router()

const postBusiness = new PostBusiness(
    new IdGenerator(),
    new PostData(),
    new Authenticator()
)
const postController = new PostController(
    postBusiness
);

postRouter.post("/create", postController.createPost)

postRouter.get("/:id", postController.getPost)