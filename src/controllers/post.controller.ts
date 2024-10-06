import { Request, Response } from "express";
import { PostService } from "../services/post.service";

const response: any = {
  status: 200,
  message: "Post posted successfully!",
  data: {},
};
export const addPost = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data)
    const result = await PostService.addPost(data);
    response.data = result;
    res.status(201).send(response);
  } catch (err) {
    response.status = 403;
    response.data = null;
    response.message = "Something went wrong";
    res.status(403).json(response);
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const { postId } = query;
    const result = await PostService.getPostById(postId as string);
    response.data = result;
    res.status(200).send(response);
  } catch (error) {
    response.status = 403;
    response.data = null;
    response.message = "Something went wrong";
    res.status(403).json(response);
  }
};

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getPosts();
    response.message = "All post fetched!";
    response.data = result;
    res.status(200).send(response);
  } catch (error) {
    response.status = 403;
    response.data = null;
    response.message = "Something went wrong";
    res.status(403).json(response);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { postId } = data;
    const result = await PostService.updatePost(postId, data);
    response.data = result;
    res.status(201).send(response);
  } catch (error) {
    response.status = 403;
    response.data = null;
    response.message = "Something went wrong";
    res.status(403).json(response);
  }
};

export const deletePost = async (req: Request, res: Response) =>{
  try {
    const query = req.query;
    const { postId } = query;
    const result = await PostService.deletePost(postId as string)
    response.data = result;
    res.status(201).send(response);
  } catch (error) {
    response.status = 403;
    response.data = null;
    response.message = "Something went wrong";
    res.status(403).json(response);
  }
}