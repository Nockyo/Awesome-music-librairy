import UserModel from "../../Models/User.js";

export const deletePlaylist = async (req, res) => {
    const {playlistName} = req.body;
    const {id} = req.data.data;
    try {
        const playlist = await UserModel.updateOne({_id: id, playlists: {$elemMatch: {name : playlistName}}},{$pull: {playlists: {name: playlistName}}});

        if(playlist.modifiedCount === 0){
            res.status(400).send('Cette playlist n\'a pas pu être supprimée');
            return
        }

        res.send(`la playlist ${playlistName} a été supprimé`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}