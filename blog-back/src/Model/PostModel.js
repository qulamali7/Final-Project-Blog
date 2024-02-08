import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    img: String,
    name: String,
    decription: String,
    category: String,
    authorID: Number,
});

export const PostModel = mongoose.model('posts', postSchema);