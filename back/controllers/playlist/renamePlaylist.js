import UserModel from "../../Models/User.js";

export const renamePlaylist = async (req, res) => {
    const {playlistName, newPlaylistName} = req.body;
    const {id} = req.data.data;
    try {
        const renamedPlaylist = await UserModel.updateOne({$and: [{_id: id}, {"playlists.name": playlistName}]},{"playlists.$.name": newPlaylistName});

        if(renamedPlaylist.modifiedCount === 0 || !renamedPlaylist.modifiedCount){
            res.status(400).send('La playlist n\'a pas pu être renommée');
            return;
        }

        res.send(`La playlist a été renommée`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}