import dotenv from "dotenv";
dotenv.config();

export const moveFile = (file, filePath, artistName, albumName) => {
    return new Promise((resolve, reject) => {
        const regex = /[^a-z0-9_\.]/i;
        let baseName = file.name.replace(regex,'_').replace(' ','_').replace('__','_').replace(':','_').replace(/\s/g, '_');

        if(artistName){
            artistName = artistName.replace(regex,'_').replace(' ','_').replace('__','_').replace(':','_').replace(/\s/g, '_');
            filePath += artistName+'/';
        }

        if(albumName){
            albumName = albumName.replace(regex,'_').replace(' ','_').replace('__','_').replace(':','_').replace(/\s/g, '_');
            filePath += albumName+'/';
        }

        let uploadPath = '../front/public/uploads/'+filePath+baseName;
        let srcPath = '/uploads/'+filePath+baseName;
        file.mv(uploadPath, (err) => {resolve(srcPath)});
    });
}
