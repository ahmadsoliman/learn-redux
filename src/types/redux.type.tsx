import { Post, AllComments } from "../models";

export interface AppStore {
  posts: Post[];
  comments: AllComments
}