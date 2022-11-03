import AlbumModel from "../../Models/Album.js";

export const getAllAlbumByStyle = async (req,res) => {
    const {style} = req.body
    try {
        const albums = await AlbumModel.find({style: style}).sort({name: 1}).limit(10)
        res.send(albums)
    } catch (err) {
        res.status(400).send(err.message)
    }
}