import AlbumModel from "../../Models/Album.js";

export const getAllAlbumByUploadedDate = async (req,res) => {
    try {
        const albums = await AlbumModel.find({}).sort({uploadedDate: -1}).limit(10)
        res.send(albums)
    } catch (err) {
        res.status(400).send(err.message)
    }
}