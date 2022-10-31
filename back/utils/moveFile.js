import dotenv from "dotenv";
dotenv.config();

export const moveFile = (file, filePath) => {
    return new Promise((resolve, reject) => {
        const regex = /[^a-z0-9_\.]/i;
        let baseName = file.name.replace(regex,'_').replace(' ','_').replace('__','_').replace(/\s/g, '_');
        let uploadPath = '../front/public/uploads/'+filePath+'/'+baseName;
        let srcPath = '/uploads/'+filePath+'/'+baseName;
        file.mv(uploadPath, (err) => resolve(srcPath));
    });
}
