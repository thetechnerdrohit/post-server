import { IPost, Post } from "../models/post.model";

const addPost = async (postBody: IPost) => {
  try {
    const newPost = await Post.create(postBody);
    return newPost;
  } catch (error) {
    throw error;
  }
};

// Get post by post id
const getPostById = async (postId: string) => {
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    throw error;
  }
};

// Get all the posts
const getPosts = async () => {
  try {
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    throw error;
  }
};

// Update existing post
const updatePost = async (postId: string, updateBody: any) => {
  try {
    const result = Post.updateOne({ _id: postId }, updateBody);
    return result;
  } catch (error) {
    throw error;
  }
};

// Delete existing post
const deletePost = async (postId: string) => {
  try {
    const result = await Post.deleteOne({ _id: postId });
    return result;
  } catch (error) {
    throw error;
  }
};

export const PostService = {
  addPost,
  getPostById,
  getPosts,
  updatePost,
  deletePost,
};
