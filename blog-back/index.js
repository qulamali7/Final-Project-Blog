import express from 'express'
import 'dotenv/config'
import cors from "cors";
import mongoose from 'mongoose';
import { postRoute } from './src/Routes/PostRoutes.js';
import { userRouter } from './src/Routes/UserRoutes.js';
import { NotFound, errorHandle } from './src/Middleware/errorMiddleware.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use("/assets", express.static('public'))

app.use("/posts", postRoute)
app.use('/users', userRouter)

app.use(NotFound)
app.use(errorHandle)

mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
