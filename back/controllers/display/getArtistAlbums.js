import AlbumModel from "../../Models/Album.js";

export const getArtistAlbums = async (req, res) => {
    const {artistId} = req.body;
    try {
        const albums = await AlbumModel.find({artist_id: artistId})
        res.send(albums)
    } catch (err) {
        res.status(400).send(err.message)
    }
}