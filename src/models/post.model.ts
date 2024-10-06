import { model, Schema } from "mongoose";

export interface IPost {
  title: string;
  description: string;
  author: string;
  isPublish: boolean;
}

const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isPublish: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const Post = model<IPost>("Posts", PostSchema);
