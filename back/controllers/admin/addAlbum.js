import AlbumModel from "../../Models/Album.js";

//upload l'image
//Gérer l'envoi des styles

export const addAlbum = async (req, res) => {
    let {name, date, artist, pochette, styles, songs} = req.body;
    try{
        const album = await AlbumModel.findOne({name: name, artist: artist});

        if(album){
            res.send('Cet artiste existe déjà');
            return
        }

        if(!styles){
            res.send('Veuillez ajouter un style musical');
            return
        }

        const newUser = await AlbumModel.create({...req.body});

        res.send(newUser);
    }catch (err){
        res.status(400).json({message: err.message});
    }
}