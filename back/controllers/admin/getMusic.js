import AlbumModel from "../../Models/Album.js";
import ArtistModel from "../../Models/Artist.js";
import TrackModel from "../../Models/Track.js";

export const getMusic = async (req, res) => {
    const {collection} = req.body;
    try{
        //récupérer la collection que l'on va parcourir ("artists", "albums" ou "tracks")
        if(collection === 'artists') {
            const artists = await ArtistModel.find();
            if(!artists){
                res.status(400).send('La requête n\'a pu aboutir')
                return
            }
            res.send(artists);
        } else if(collection === 'albums') {
            const albums = await AlbumModel.find();
            if(!albums){
                res.status(400).send('La requête n\'a pu aboutir')
                return
            }
            res.send(albums);
        } else if(collection === 'tracks') {
            const tracks = await TrackModel.find();
            if(!tracks){
                res.status(400).send('La requête n\'a pu aboutir')
                return
            }
            res.send(tracks);
        } else {
            res.status(400).send('Cette requête ne peut aboutir');
            return
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}