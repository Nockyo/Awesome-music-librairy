import UserModel from "../../Models/User.js";

export const editOrderPlaylistTracks = async (req, res) => {
    const {playlistName, tracks} = req.body;
    const {id} = req.data.data;
    try {
        const newPlaylist = await UserModel.updateOne({$and: [{_id: id}, {"playlists.name": playlistName}]},{$set: {"playlists.$.tracks": tracks}});

        if(newPlaylist.modifiedCount === 0 || !newPlaylist.modifiedCount){
            res.status(400).send('La playlist n\'a pas pu être modifiée');
            return;
        }

        res.send(`La playlist a été modifiée`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}