import UserModel from "../../Models/User.js";

export const addTrackToPlaylist = async (req, res) => {
    const {userName, playlistName, trackId} = req.body;
    try {
        const track = await UserModel.find({name: userName, playlists: {$elemMatch:{name : playlistName}}}, {playlists: 1})
        console.log(track)

        // const newPlaylist = await UserModel.updateOne({name: userName, playlists: {$elemMatch:{name : playlistName}}},{$push : {"playlists.$.tracks": trackId}});
        // console.log(newPlaylist)
        // if(newPlaylist.modifiedCount === 0 || !newPlaylist.modifiedCount){
        //     res.status(400).send('La playlist n\'a pas pu être créée');
        //     return;
        // }

        res.send(`la playlist ${playlistName} a été créée`);
    } catch (err) {
        res.status(400).send(err.message);
    }
}