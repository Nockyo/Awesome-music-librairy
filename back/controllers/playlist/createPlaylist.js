import UserModel from "../../Models/User.js";

export const createPlaylist = async (req, res) => {
    const {playlistName} = req.body;
    const {id} = req.data.data;
    try {
        const playlist = await UserModel.findOne({_id: id, playlists: {$elemMatch: {name : playlistName}}},{playlists: 1, _id: 0});

        if(playlist){
            res.status(400).send('Cette playlist existe déjà');
            return
        }

        const newPlaylist = await UserModel.updateOne({_id: id},{$push:{playlists: {name: playlistName, tracks: []}}});

        if(newPlaylist.modifiedCount === 0 || !newPlaylist.modifiedCount){
            res.status(400).send('La playlist n\'a pas pu être créée');
            return;
        }

        res.send(`la playlist ${playlistName} a été créée`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}