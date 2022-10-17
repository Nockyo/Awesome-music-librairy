import ArtistModel from '../../Models/Artist.js';       //Artists Model

//Renvoyer les artistes
export const getArtists = async (req, res) => {
    try {
        const artists = await ArtistModel.find({});
        res.json({artists});
    } catch (err) {
        res.status(500).send(err.message);
    }
}