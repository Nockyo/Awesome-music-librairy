import AlbumModel from "../../Models/Album.js";
import ArtistModel from "../../Models/Artist.js";
import TrackModel from "../../Models/Track.js";
import { moveFile } from "../../utils/moveFile.js";

// artists
    // name
    // biography
    // image
    // style
// albums
    // name
    // artist
    // date
    // style
    // image
// tracks
    // name
    // artist
    // album
    // style
    // file

export const editMusic = async (req, res) => {
    const {collection, id} = req.body;
    try {
        //récupérer la collection que l'on va parcourir ("artists", "albums" ou "tracks")
        // TODO Trouver une solution pour le contrôle des modifications
        // let modifiedCount = 0;
        if(collection === 'artists') {
            const {name, biography, style} = req.body;
            
            const updatedArtist = await ArtistModel.updateOne({_id: id},{name: name, biography: biography, style: style});
            // modifiedCount += updatedArtist.modifiedCount;

            if(req.files != null && req.files.image){
                moveFile(req.files.image, 'images/artists').then( async (imageSrc) => {
                    const imageUpdated = await ArtistModel.updateOne({_id: id},{image: imageSrc})
                    // modifiedCount += imageUpdated.modifiedCount;
                });
            }

            // if(modifiedCount === 0){
            //     console.log('LOG 1')
            //     res.status(400).send('Aucune modification n\'a été enregistrée')
            //     return
            // }

            res.send('Artist updated');
        } else if(collection === 'albums') {
            const {name, artist, date, style} = req.body;

            const updatedAlbum = await AlbumModel.updateOne({_id: id},{name: name, artist: artist, date: date, style: style});
            // modifiedCount += updatedAlbum.modifiedCount;

            if(req.files != null && req.files.image){
                moveFile(req.files.image, 'images/albums/' + artist).then( async (imageSrc) => {
                    const imageUpdated = await AlbumModel.updateOne({_id: id},{image: imageSrc})
                    // modifiedCount += imageUpdated.modifiedCount;
                });
            };

            // if(modifiedCount === 0){
            //     res.status(400).send('Aucune modification n\'a été enregistrée')
            //     return
            // }

            res.send('Album uploaded');
        } else if(collection === 'tracks') {
            const {name, artist, album, style} = req.body;

            const updatedTrack = await TrackModel.updateOne({_id: id},{name: name, artist: artist, album: album, style: style});
            // modifiedCount += updatedTrack.modifiedCount;

            if(req.files != null && req.files.file){
                moveFile(req.files.file, 'music/' + artist).then( async (fileSrc) => {
                    const fileUpdated = await TrackModel.updateOne({_id: id},{file: fileSrc})
                    // modifiedCount += fileUpdated.modifiedCount;
                });
            };

            // if(modifiedCount === 0){
            //     res.status(400).send('Aucune modification n\'a été enregistrée')
            //     return
            // } else {
            //     modifiedCount = 0;
            // }

            const updatedAlbumsTracks = await AlbumModel.updateMany({artist : artist, tracks: {$elemMatch: {id : id}}}, {$set:{ "tracks.$.name": name }});
            // modifiedCount += updatedAlbumsTracks.modifiedCount;
            
            // if(modifiedCount === 0){
            //     res.status(400).send('Aucune modification n\'a été enregistrée')
            //     return
            // }

            res.send('tracks uploaded');
        } else {
            res.status(400).send('Cette requête ne peut aboutir');
            return
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
}