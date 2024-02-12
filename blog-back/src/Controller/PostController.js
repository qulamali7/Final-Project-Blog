import { HttpError } from "../Model/ErrorModel.js"
import { PostModel } from "../Model/PostModel.js"

export const getAllPost = async (req, res) => {
    try {
        const posts = await PostModel.find({})
        res.status(200).json(posts)
    } catch (error) {
        return next(new HttpError(error))
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        return next(new HttpError(error))
    }
}

export const createPost = async (req, res) => {
    try {
        const { img, title, description, category, authorID } = req.body
        const newPost = new PostModel({ image: "http://localhost:3500/assets/" + req.photo, title, description, category, authorID })
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        return next(new HttpError(error))
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params
    const { img, title, description, category, authorID } = req.body
    const post = await PostModel.findByIdAndUpdate(id, { img, title, description, category, authorID })
    res.send('Got a PUT request at /post')
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findByIdAndDelete(id)
        res.status(200).json(post)
    } catch (error) {
        return next(new HttpError(error))
    }
}