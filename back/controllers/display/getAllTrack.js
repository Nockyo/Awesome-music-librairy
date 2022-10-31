import TrackModel from "../../Models/Track.js";

export const getAllTrack = async (req,res) => {
    try {
        const tracks = await TrackModel.find({}).sort({artist: 1, album: 1})
        res.send(tracks)
    } catch (err) {
        res.status(400).send(err.message)
    }
}