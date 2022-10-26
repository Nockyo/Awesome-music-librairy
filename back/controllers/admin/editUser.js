import UserModel from '../../Models/User.js';

export const editUser = async (req, res) => {
    try {
        let {emailTrue, emailFalse} = req.body;

        if(emailTrue.length !== 0) {
            const adminTrue = await UserModel.updateMany({email: emailTrue},{$set: {admin: true}});
        }

        if(emailFalse.length !== 0) {
            const adminFalse = await UserModel.updateMany({email: emailFalse},{$set: {admin: false}});
        }


        res.send("Les modifications ont été enregistrées");
    } catch (err) {
        res.status(400).send(err.message);
    }

}