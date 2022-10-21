import TrackModel from "../../Models/Track.js";

export const addListened = async (req, res) => {
    const {trackId} = req.body;
    try {
        const track = await TrackModel.updateOne({_id: trackId},{$inc: {listened: 1}})
        res.send(track)
    } catch (err) {
        res.send(400).send(err.message);
    }
}