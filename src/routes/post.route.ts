import { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../controllers/post.controller";

const PostRouter: Router = Router();

PostRouter.post("/addPost", addPost);

PostRouter.get("/getById", getPostById);

PostRouter.get("/getAllPosts", getAllPost);

PostRouter.put("/updatePost", updatePost);

PostRouter.delete('/deletePost', deletePost)

export default PostRouter;
