import ArtistModel from "../../Models/Artist.js";
import { moveFile } from "../../utils/moveFile.js";

export const addArtist = async (req, res) => {
    const {name, style} = req.body;
    try{
        const artist = await ArtistModel.findOne({name: name});

        if(artist){
            res.status.send('Cet artiste existe déjà');
            return
        }

        if(!style){
            res.status.send('Veuillez ajouter un style musical');
            return
        }

        if(!req.files){
            res.status.send('Veuillez ajouter une photo');
            return
        }

        const file = req.files.image;
        moveFile(file, 'images/artists').then( async (imageSrc) => {
            const newUser = await ArtistModel.create({...req.body, image: imageSrc})
            res.send(newUser);
        });

    }catch (err){
        res.status(400).json({message: err.message});
    }
}