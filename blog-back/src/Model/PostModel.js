import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    img: String,
    title: String,
    description: String,
    category: String,
    authorID: Number,
});

export const PostModel = mongoose.model('posts', postSchema); 