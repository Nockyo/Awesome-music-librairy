import UserModel from '../Models/User.js'

export const register = async (req, res) => {
    let {email, name, password, passwordConfirm} = req.body;

    if (password !== passwordConfirm) {
        res.status(401).json({message: "This Password is not valid"});
        return
    }

    try {
        const findEmail = await UserModel.findOne({email: email});
        if(findEmail){
            res.status(400).send('Ce nom et/ou ce mail sont déjà utilisés');
            return
        }

        const findName = await UserModel.findOne({name: name});
        if(findName){
            res.status(400).send('Ce nom et/ou ce mail sont déjà utilisés');
            return
        }

        const newUser = await UserModel.create({...req.body});

        res.status(200).send('Inscription réussie');
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}