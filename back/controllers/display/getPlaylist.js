import TrackModel from "../../Models/Track.js";

export const getPlaylist = async (req,res) => {
    const {playlistTracks} = req.body;
    try {
        const trackList = [];
        
        playlistTracks.forEach((track) => {
            trackList.push(TrackModel.findOne({_id: track}));
        })

        Promise.all(trackList).then((tracks) => {
            res.send(tracks)
        })
    } catch (err) {
        res.status(400).send(err.message)
    }
}