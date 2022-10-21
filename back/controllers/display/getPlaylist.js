import TrackModel from "../../Models/Track.js";
import UserModel from "../../Models/User.js";

export const getPlaylist = async (req,res) => {
    const {playlistName} = req.body;
    const {id} = req.data.data;
    try {
        const trackList = [];

        const playlistTracks = await UserModel.findOne({$and:[{_id: id},{"playlists.name": playlistName}]},{playlists: 1, _id: 0})
        
        playlistTracks.playlists[0].tracks.forEach((track) => {
            trackList.push(TrackModel.findOne({_id: track}));
        })

        Promise.all(trackList).then((tracks) => {
            res.send(tracks)
        })
    } catch (err) {
        res.status(400).send(err.message)
    }
}