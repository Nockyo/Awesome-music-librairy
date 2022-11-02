import UserModel from "../../Models/User.js";

export const addTrackToPlaylist = async (req, res) => {
    const {playlistName, trackId} = req.body;
    const {id} = req.data.data;
    try {
        const track = await UserModel.find({$and: [{_id: id}, {"playlists.name" : playlistName}, {"playlists.tracks" : trackId}]});

        if(track.length > 0){
            res.status(400).send('Ce morceau est déjà présent dans votre playlist');
            return
        }

        const newPlaylist = await UserModel.updateOne({$and: [{_id: id, "playlists.name": playlistName}]},{$push: {'playlists.$.tracks': trackId}});

        if(newPlaylist.modifiedCount === 0 || !newPlaylist.modifiedCount){
            res.status(400).send('Le morceau n\'a pas pu être ajouté');
            return;
        }

        res.send(`le morceau a été ajouté`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}