import AlbumModel from "../../Models/Album.js";

export const getAlbum = async (req,res) => {
    const {albumId} = req.body;
    try {
        const album = await AlbumModel.findOne({_id: albumId})
        res.send(album)
    } catch (err) {
        res.status(400).send(err.message)
    }
}