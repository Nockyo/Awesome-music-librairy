import AlbumModel from "../../Models/Album.js";

export const getAllAlbum = async (req,res) => {
    try {
        const albums = await AlbumModel.find({}).sort({name: 1})
        res.send(albums)
    } catch (err) {
        res.status(400).send(err.message)
    }
}