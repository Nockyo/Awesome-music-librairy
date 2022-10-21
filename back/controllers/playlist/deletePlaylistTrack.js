import UserModel from "../../Models/User.js";

export const deletePlaylistTrack = async (req, res) => {
    const {playlistName, trackId} = req.body;
    const {id} = req.data.data;
    try {
        const deletedTrack = await UserModel.updateOne({$and: [{_id: id, "playlists.name": playlistName}, {"playlists.tracks" : trackId}]},{$pull: {"playlists.$.tracks": trackId}});
        
        if(deletedTrack.modifiedCount === 0 || !deletedTrack.modifiedCount){
            res.status(400).send('Le morceau n\'a pas pu être supprimé');
            return;
        }

        res.send(`le morceau a été supprimé`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}