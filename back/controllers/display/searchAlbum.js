import AlbumModel from "../../Models/Album.js";

export const searchAlbum = async (req, res) => {
    const {search} = req.body
    try {
        const albums = await AlbumModel.find({ name: {$regex: '(?i)'+search}});
        res.send(albums)
    } catch (err) {
        res.send(err.message)
    }
}