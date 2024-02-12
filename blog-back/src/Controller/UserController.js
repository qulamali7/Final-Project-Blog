import { HttpError } from "../Model/ErrorModel.js"
import { UsersModel } from "../Model/UserModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import fs from "fs";
// import path from "path";
// import { randomUUID } from "crypto";
// import { uuid } from "uuid";


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
        const newUser = await UsersModel.create({ name, email: newEmail, password: hash})
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
    // try {
    //     if (!req.files.avatar) {
    //         return next(new HttpError("Please choose an image", 422))
    //     }
    //     const user = await UsersModel.findById(req.user.id)
    //     if (user.avatar) {
    //         fs.unlink(path.join(__dirname, "..", 'uploads', user.avatar), (err) => {
    //             if (err) {
    //                 return next(new HttpError(err))
    //             }
    //         })
    //     }

    //     const { avatar } = req.files
    //     if (avatar.size > 500000) {
    //         return next(new HttpError("Profile picture too big.Should be less than 500kb"))
    //     }

    //     let fileName;
    //     fileName = avatar.name
    //     let splittedFilename = fileName.split(".")
    //     let newFilename = splittedFilename[0] + uuid() + "." + splittedFilename[splittedFilename.length - 1]
    //     avatar.mv(path.join(__dirname, "..", 'uploads', newFilename), (err) => {
    //         if (err) {
    //             return next(new HttpError(err))
    //         }
    //         const updatedAvatar = await UsersModel.findByIdAndUpdate(req.user.id, { avatar: newFilename })
    //     })
    // } catch (error) {
    //     return next(new HttpError(error))
    // }
}


export const editUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, email, currentPassword, newPassword, confirmPassword, image } = req.body
        if (!name || !email || !currentPassword || !newPassword) {
            return next(new HttpError("Fill in all fields", 422))
        }
        const user = await UsersModel.findById(id)
        if (!user) {
            return next(new HttpError("User not Found", 403))
        }
        const emailExists = await UsersModel.findOne({ email })
        if (!emailExists && (emailExists._id != id)) {
            return next(new HttpError("Email already exist", 422))
        }
        const validateUserPassword = await bcrypt.compare(currentPassword, user.password)
        if (!validateUserPassword) {
            return next(new HttpError("Invalid current password", 422))
        }

        if (newPassword !== confirmPassword) {
            return next(new HttpError("New Passwords do not match", 422))
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newPassword, salt)
        const newInfo = await UsersModel.findByIdAndUpdate(id, { name, email, password: hash, image: "http://localhost:3500/assets/" + req.photo }, { new: true })
        req.status(200).json(newInfo)
    } catch (error) {
        return next(new HttpError(error))
    }
}

export const getAuthors = async (req, res, next) => {
    try {
        const authors = await UsersModel.find({})
        res.status(200).json(authors)
    } catch (error) {
        return next(new HttpError(error))
    }
}



