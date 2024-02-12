import { HttpError } from "../Model/ErrorModel.js"
import { UsersModel } from "../Model/UserModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body
        if (!name || !email || !password) {
            return next(new HttpError("Fill in all fields", 422))
        }
        const newEmail = email.toLowerCase()
        const emailExists = await UsersModel.findOne({ email: newEmail })
        if (emailExists) {
            return next(new HttpError("Email already exixts", 422))
        }
        if ((password.trim()).length < 6) {
            return next(new HttpError("Password should be at least 6 characters", 422))
        }
        if (password != password2) {
            return next(new HttpError("Password do not match", 422))
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const newUser = await UsersModel.create({ name, email: newEmail, password: hash })
        res.status(201).json(`New User ${newUser.email} resgistered`)
    } catch (error) {
        return next(new HttpError("User registration failed", 422))
    }
}


export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return next(new HttpError("Fill in all fields", 422))
        }
        const newEmail = email.toLowerCase()
        const user = await UsersModel.findOne({ email: newEmail })
        if (!user) {
            return next(new HttpError("Invalid credentials", 422))
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return next(new HttpError("Invalid credentials", 422))
        }
        const { _id: id, name } = user
        const token = jwt.sign({ id, name }, process.env.JWT)
        res.status(200).json({ token, id, name })
    } catch (error) {
        return next(new HttpError("User login failed", 422))
    }
}

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findById(id).select('-password')
        if (!user) {
            return next(new HttpError("User not Found", 404))
        }
        res.status(200).json(user)
    } catch (error) {
        return next(new HttpError(error))
    }
}

export const changePhotoUser = async (req, res, next) => {
    try {
        res.json(req.files)
        
    } catch (error) {
        return next(new HttpError(error))
    }
    res.json("User User Photo")
}


export const editUser = async (req, res, next) => {
    res.json("Edit User Profile")
}

export const getAuthors = async (req, res, next) => {
    try {
        const authors = await UsersModel.find({})
        res.status(200).json(authors)
    } catch (error) {
        return next(new HttpError(error))
    }
}



