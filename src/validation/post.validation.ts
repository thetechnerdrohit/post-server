import { IPost } from "../models/post.model";
import Joi from "joi";

const addPostBody: Record<keyof IPost, any> = {
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  isPublish: Joi.boolean(),
};

export const addPostValidationSchema = {
  body: Joi.object().keys(addPostBody),
};


export const getPostValidationSchema = {
    query: Joi.object({
        id: Joi.string().required()
    }),
  };
  export const updatePostValidationSchema = {
    params: Joi.object({
        id: Joi.string().required()
    }),
    body: Joi.object().keys(addPostBody),
  };
  
  