import dotenv from "dotenv";
dotenv.config();

export const moveFile = (file, filePath) => {
    return new Promise((resolve, reject) => {
        const regex = /[^a-z0-9_\.]/i;
        let baseName = file.name.replace(regex,'_').replace('__','_').replace('..','_');
        let uploadPath = process.env.DIR_IMG_PRODUCT+filePath+'/'+baseName;
        file.mv(uploadPath, (err) => resolve(uploadPath));
    });
}
