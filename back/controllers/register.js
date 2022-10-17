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
            res.status(400).send('error');
            return
        }

        const findName = await UserModel.findOne({name: name});
        if(findName){
            res.status(400).send('Ce nom est déjà utilisé');
            return
        }

        const newUser = await UserModel.create({...req.body});

        //rediriger vers le login
        res.send(200).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}