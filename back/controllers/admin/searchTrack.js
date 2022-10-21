import TrackModel from "../../Models/Track.js";

export const searchTrack = async (req, res) => {
    const {search} = req.body
    try {
        const tracks = await TrackModel.find({ name: {$regex: '(?i)'+search}});
        res.send(tracks)
    } catch (err) {
        res.send(err.message)
    }
}