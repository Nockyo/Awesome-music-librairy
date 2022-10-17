import UserModel from '../../Models/User.js';
//Récupérer tous les utilisateurs
//Les afficher dans un tableau, d'abord les admins, après les non admin. 
// mail / name / admin (checkbox : cochée = admin)
// si une modif proposer un submit
//N'envoyer que les users modifiés
// [{user},{user1},{user2}]
// editer les infos

export const editUser = async (req, res) => {
    // update
    // ex donnée demandée 
    // {
    // 	"emailTrue": ["aaa@gmail.com"],
    // 	"emailFalse": ["aab@gmail.com", "aac@gmail.com"]
    // }

    try {
        // ! injection code malveillant
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