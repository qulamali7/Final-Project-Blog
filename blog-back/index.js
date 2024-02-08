import express from 'express'
import 'dotenv/config'
import cors from "cors";
import mongoose from 'mongoose';
import { postRoute } from './src/Routes/PostRoutes.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use("/posts", postRoute)

mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
