import  { Router } from "express";
import { changePhotoUser, editUser, getAuthors, getUser, loginUser, registerUser } from "../Controller/UserController.js";

export const userRouter=Router()

userRouter.post('/register',registerUser)
.post('/login',loginUser)
.get('/:id',getUser)
.get('/',getAuthors)
.post('/changePhoto',changePhotoUser)
.patch('/edit',editUser)