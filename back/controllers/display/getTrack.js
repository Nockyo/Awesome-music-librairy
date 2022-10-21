import TrackModel from "../../Models/Track.js"

export const getTrack = async (req,res) => {
    const {trackId} = req.body;
    try {
        const track = await TrackModel.findOne({_id: trackId})
        res.send(track)
    } catch (err) {
        res.status(400).send(err.message)
    }
}