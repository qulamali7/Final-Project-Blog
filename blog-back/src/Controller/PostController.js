import { PostModel } from "../Model/PostModel.js"

export const getAllPost = async (req, res) => {
    const posts = await PostModel.find({})
    res.send(posts)
}

export const getPost = async (req, res) => {
    const { id } = req.params
    const post = await PostModel.findById(id)
    res.send(post)
}

export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)
    await newPost.save()
    res.send('Got a POST request')
}

export const updatePost = async (req, res) => {
    const { id } = req.params
    const post = await PostModel.findByIdAndUpdate(id, req.body)
    res.send('Got a PUT request at /post')
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    const post = await PostModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /post')
}