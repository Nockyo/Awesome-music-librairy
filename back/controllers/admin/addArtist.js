import ArtistModel from "../../Models/Artist.js";
import { moveFile } from "../../utils/moveFile.js";

export const addArtist = async (req, res) => {
    const {name, biography, style} = req.body;
    try{
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
            res.status(400).send('Veuillez ajouter une photo');
            return
        }

        const file = req.files.image;
        moveFile(file, 'images/artists').then( async (imageSrc) => {
            await ArtistModel.create({...req.body, image: imageSrc})
            res.status(200).send('L\'artiste a bient été ajouté');
        });
    } catch (err){
        res.status(400).json({message: err.message});
    }
}