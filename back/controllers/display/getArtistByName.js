import ArtistModel from "../../Models/Artist.js";

export const getArtistByName = async (req,res) => {
    const {artistName} = req.body;
    try {
        const artist = await ArtistModel.findOne({name: artistName})
        res.send(artist)
    } catch (err) {
        res.status(400).send(err.message)
    }
}