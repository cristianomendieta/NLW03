import multer from 'multer';
import path from 'path';


export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const originalName = file.originalname.replace(" ", "")
            const fileName = `${Date.now()}-${originalName}`;

            cb(null, fileName);
        },
    })
};