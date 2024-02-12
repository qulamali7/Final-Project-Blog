import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,

    },
    posts: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: 'User'
    },
}, { timestamps: true });

export const UsersModel = mongoose.model('users', userSchema);