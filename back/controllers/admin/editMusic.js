import AlbumModel from "../../Models/Album.js";
import ArtistModel from "../../Models/Artist.js";
import TrackModel from "../../Models/Track.js";

// artists
    // name
    // biography
    // image
    // styles
// albums
    // name
    // artist
    // date
    // style
    // tracks
        // id
        // order
        // name
    // image
// tracks
    // name
    // artist
    // album
    // style
    // duration
    // file

export const editMusic = async (req, res) => {
    const {collection, id} = req.body;
    try {
        //récupérer la collection que l'on va parcourir ("artists", "albums" ou "tracks")
        if(collection === 'artists') {
            const artists = await ArtistModel.find({_id: id});
            if(artists.deletedCount === 0){
                res.status(400).send('Auncune donnée n\'a été supprimée')
                return
            }
            res.send(artists);
        } else if(collection === 'albums') {
            const albums = await AlbumModel.find({_id: id});
            if(albums.deletedCount === 0){
                res.status(400).send('Auncune donnée n\'a été supprimée')
                return
            }
            res.send(albums);
        } else if(collection === 'tracks') {
            const tracks = await TrackModel.find({_id: id});
            if(tracks.deletedCount === 0){
                res.status(400).send('Auncune donnée n\'a été supprimée')
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