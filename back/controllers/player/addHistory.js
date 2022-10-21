import UserModel from "../../Models/User.js";

export const addHistory = async (req, res) => {
    const {trackId} = req.body;
    const {id} = req.data.data;
    try {
        const userHistory = await UserModel.updateOne({_id: id},{$push: {history: trackId}})
        res.send(userHistory)
    } catch (err) {
        res.status(400).send(err.message);
    }
}