import AlbumModel from "../../Models/Album.js"

export const getLastUpdatedAlbum = async (req, res) => {
    try {
        const lastUploadedAlbum = await AlbumModel.find().sort({ "uploadedDate": -1 }).limit(20);
        res.send(lastUploadedAlbum)
    } catch (err) {
        res.status(400).send(err.message)
    }
}