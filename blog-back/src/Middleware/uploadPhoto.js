import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/imgs')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = new Date(Date.now()).toString() + '-' + Math.round(Math.random() * 1E9)
        req.photo = uniqueSuffix + file.originalname
        cb(null, uniqueSuffix + file.originalname)
    }
})
