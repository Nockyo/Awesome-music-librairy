import AlbumModel from "../../Models/Album.js";
import ArtistModel from "../../Models/Artist.js";
import TrackModel from "../../Models/Track.js";

export const deleteMusic = async (req, res) => {
    const {collection, id} = req.body;
    try {
        //récupérer l'id de l'artiste, l'album, ou le morceau que l'on va supprimer
        //récupérer la collection que l'on va parcourir ("artists", "albums" ou "tracks")
        if(collection === 'artists') {
            const artists = await ArtistModel.deleteOne({_id: id});
            if(artists.deletedCount === 0){
                res.status(400).send('Auncune donnée n\'a été supprimée')
                return
            }
            res.send(artists);
        } else if(collection === 'albums') {
            const albums = await AlbumModel.deleteOne({_id: id});
            if(albums.deletedCount === 0){
                res.status(400).send('Auncune donnée n\'a été supprimée')
                return
            }
            res.send(albums);
        } else if(collection === 'tracks') {
            const tracks = await TrackModel.deleteOne({_id: id});
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