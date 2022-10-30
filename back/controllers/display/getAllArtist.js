import ArtistModel from "../../Models/Artist.js";

export const getAllArtist = async (req,res) => {
    try {
        const artists = await ArtistModel.find({}).sort({name: 1})
        res.send(artists)
    } catch (err) {
        res.status(400).send(err.message)
    }
}