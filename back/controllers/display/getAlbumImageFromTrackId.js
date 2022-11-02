import AlbumModel from "../../Models/Album.js";

export const getAlbumImageFromTrackId = async (req,res) => {
    const {trackId, albumName} = req.body;
    try {
        const album = await AlbumModel.findOne({name: albumName, 'tracks.id' : trackId},{image: 1, _id: 0})
        res.send(album)
    } catch (err) {
        res.status(400).send(err.message)
    }
}