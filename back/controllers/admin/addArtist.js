import ArtistModel from "../../Models/Artist.js";

//upload l'image
//Gérer l'envoi des styles

export const addArtist = async (req, res) => {
    let {name, biography, image, styles} = req.body;
    try{
        const artist = await ArtistModel.findOne({name: name});

        if(artist){
            res.send('Cet artiste existe déjà');
            return
        }

        if(!styles){
            res.send('Veuillez ajouter un style musical');
            return
        }

        const newUser = await ArtistModel.create({...req.body});

        res.send(newUser);
    }catch (err){
        res.status(400).json({message: err.message});
    }
}