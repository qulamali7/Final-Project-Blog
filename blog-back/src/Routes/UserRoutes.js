import { Router } from "express";
import { changePhotoUser, editUser, getAuthors, getUser, loginUser, registerUser } from "../Controller/UserController.js";
import multer from "multer";
import { storage } from "../Middleware/uploadPhoto.js";

const upload = multer({ storage: storage })
export const userRouter = Router()
userRouter.post('/register',upload.single('image'), registerUser)
    .post('/login', loginUser)
    .get('/:id', getUser)
    .get('/', getAuthors)
    .post('/changePhoto', changePhotoUser)
    .put('/edit/:id', upload.single('image'), editUser)