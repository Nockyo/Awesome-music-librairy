import UserModel from "../../Models/User.js";

export const getUserPlaylists = async (req,res) => {
    const {id} = req.data.data;
    try {
        const playlists = await UserModel.find({_id: id},{playlists: 1, _id: 0});
        res.send(playlists)
    } catch (err) {
        res.status(400).send(err.message)
    }
}