import UserModel from '../../Models/User.js';
//Récupérer tous les utilisateurs
//Les afficher dans un tableau, d'abord les admins, après les non admin. 
// mail / name / admin (checkbox : cochée = admin)
// si une modif proposer un submit
// [{user},{user1},{user2}]
// editer les infos

//Renvoyer les utilisateurs
export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({},{"password": 0, "history": 0, "playlist": 0}).sort( { email: 1 } );
        res.json({users});
    } catch (err) {
        res.status(500).send(err.message);
    }
}