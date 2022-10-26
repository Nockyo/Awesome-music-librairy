import UserModel from '../Models/User.js';
import { generateAccessToken, comparePassword } from '../utils/utils.js';

export const login = async (req, res) => {
    let {email, password} = req.body;

    try {
        const user = await UserModel.findOne({email: email});
        if(!user){
            res.status(401).send('Le mail et/ou le mot de passe ne sont pas valides');
            return
        }

        comparePassword(password, user.password)
            .then(data => {
                if(data){
                    let jwt = generateAccessToken({"id": user._id.toString(),"name": user.name,"admin": user.admin});
                    res.status(200).json({jwt});
                } else {
                    res.status(400).send('Le mail et/ou le mot de passe ne sont pas valides');
                }
            });

    } catch (err) {
        res.status(400).json({message: err.message});
    }
}