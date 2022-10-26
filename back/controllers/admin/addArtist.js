import ArtistModel from "../../Models/Artist.js";
import { moveFile } from "../../utils/moveFile.js";

export const addArtist = async (req, res) => {
    const {name, biography, style} = req.body;
    try{
        console.log(req.body)
        const artist = await ArtistModel.findOne({name: name});

        if(artist){
            res.status(400).send('Cet artiste existe déjà');
            return
        }

        if(!biography){
            res.status(400).send('Veuillez ajouter une biographie');
            return
        }

        if(!style){
            res.status(400).send('Veuillez ajouter un style musical');
            return
        }

        if(!req.files){
            res.status.send('Veuillez ajouter une photo');
            return
        }

        const file = req.files.image;
        console.log(file)
        moveFile(file, 'images/artists').then( async (imageSrc) => {
            const newUser = await ArtistModel.create({...req.body, image: imageSrc})
            res.send(newUser);
        });

    }catch (err){
        res.status(400).json({message: err.message});
    }
}