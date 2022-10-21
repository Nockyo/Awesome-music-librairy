import ArtistModel from "../../Models/Artist.js";

export const getArtist = async (req,res) => {
    const {artistId} = req.body;
    try {
        const artist = await ArtistModel.findOne({_id: artistId})
        res.send(artist)
    } catch (err) {
        res.status(400).send(err.message)
    }
}