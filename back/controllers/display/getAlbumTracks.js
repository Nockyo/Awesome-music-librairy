import AlbumModel from "../../Models/Album.js";
import TrackModel from "../../Models/Track.js";

export const getAlbumTracks = async (req, res) => {
    const {albumId} = req.body
    try {
        const trackList = [];

        const albumTracks = await AlbumModel.findOne({_id: albumId},{tracks: 1, _id: 0})
        
        albumTracks.tracks.forEach((track) => {
            trackList.push(TrackModel.findOne({_id: track.id}));
        })

        Promise.all(trackList).then((tracks) => {
            res.send(tracks)
        })
    } catch (err) {
        res.status(400).send(err.message);
    }
}