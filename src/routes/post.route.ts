import { Router } from "express";
import {
  addPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../controllers/post.controller";
import validator from "../validator/request.validator";
import { addPostValidationSchema } from "../validation/post.validation";

const PostRouter: Router = Router();

PostRouter.post("/addPost", validator(addPostValidationSchema), addPost);

PostRouter.get("/getById", getPostById);

PostRouter.get("/getAllPosts", getAllPost);

PostRouter.put("/updatePost", updatePost);

PostRouter.delete("/deletePost", deletePost);

// PostRouter.get('/', getAllPost) This is for demo purpose..

export default PostRouter;
