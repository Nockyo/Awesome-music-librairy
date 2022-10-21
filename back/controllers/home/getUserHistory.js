import UserModel from "../../Models/User.js";

export const getUserHistory = async (req, res) => {
    const {id} = req.data.data;
    try {
        const userHistory = await UserModel.findOne({_id: id},{history: 1, _id: 0}).limit(20);
        res.send(userHistory)
    } catch (err) {
        res.status(400).send(err.message);
    }
}