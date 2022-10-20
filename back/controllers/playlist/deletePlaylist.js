import UserModel from "../../Models/User.js";

export const deletePlaylist = async (req, res) => {
    const {userName, playlistName} = req.body;
    try {
        const playlist = await UserModel.updateOne({name: userName, playlists: {$elemMatch: {name : playlistName}}},{$pull: {playlists: {name: playlistName}}});

        if(playlist.modifiedCount === 0){
            res.status(400).send('Cette playlist n\'a pas pu être supprimée');
            return
        }

        res.send(`la playlist ${playlistName} a été supprimer`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}