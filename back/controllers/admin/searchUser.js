import UserModel from "../../Models/User.js"

export const searchUser = async (req, res) => {
    const {search} = req.body
    try {
        const users = await UserModel.find({ name: {$regex: '(?i)'+search}});
        res.send(users)
    } catch (err) {
        res.send(err.message)
    }
}