import ArtistModel from "../../Models/Artist.js";

export const searchArtist = async (req, res) => {
    const {search} = req.body
    try {
        const artists = await ArtistModel.find({ name: {$regex: '(?i)'+search}});
        res.send(artists)
    } catch (err) {
        res.send(err.message)
    }
}