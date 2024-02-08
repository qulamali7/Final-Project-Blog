import express from "express";
import { createPost, deletePost, getAllPost, getPost, updatePost } from "../Controller/PostController.js";

export const postRoute=express.Router()

postRoute.get("/",getAllPost)
postRoute.get("/:id",getPost)
postRoute.post("/",createPost)
postRoute.put("/:id",updatePost)
postRoute.delete("/:id",deletePost)