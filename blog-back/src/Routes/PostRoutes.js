import express from "express";
import { createPost, deletePost, getAllPost, getPost, updatePost } from "../Controller/PostController.js";
import multer from "multer";
import { storage } from "../Middleware/uploadPhoto.js";
export const postRoute = express.Router()

const upload = multer({ storage: storage })

postRoute.get("/", getAllPost)
postRoute.get("/:id", getPost)
postRoute.post("/", upload.single('image'), createPost)
postRoute.put("/:id", upload.single('image'), updatePost)
postRoute.delete("/:id", deletePost)