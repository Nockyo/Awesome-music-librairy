import AlbumModel from "../../Models/Album.js";
import ArtistModel from "../../Models/Artist.js";
import TrackModel from "../../Models/Track.js";
import { moveFile } from "../../utils/moveFile.js";

export const addAlbum = async (req, res) => {
    let {name, artistId, date, style, tracksName} = req.body;
    const image = req.files.image;
    const files = req.files.tracksFile;

    try{
        const artist = await ArtistModel.findOne({_id: artistId}, {name: 1})
        const artistName = artist.name;
        const artistIdStr = artist._id.toString()
        const album = await AlbumModel.findOne({name: name, artist_id: artistIdStr, date: date});      

        if(album){
            res.status(400).send('Cet album existe déjà');
            return
        }

        if(!style){
            res.status(400).send('Veuillez ajouter un style musical');
            return
        }

        if(!image){
            res.status(400).send('Veuillez ajouter une photo');
            return
        }

        await moveFile(image, 'images/albums/', artistName).then((imageSrc) => {
            const newAlbum = AlbumModel.create({
                name: name,
                artist: artistName,
                artist_id: artistIdStr,
                date: date,
                style: style,
                tracks: [], 
                uploadedDate: Date.now(),
                image: imageSrc
            })
        })

        // Vérification qu'il y a bien le bon nombre de fichier
        if((Array.isArray(tracksName) && Array.isArray(files) && tracksName.length !== files.length) || !files){
            res.status(400).send('Veuillez ajouter un fichier');
            return
        }

        //Passer par un boucle for si il y a plusieurs morceaux
        const newTracks = [];
        if(Array.isArray(files)){
            for(const index in tracksName){
                const trackName = tracksName[index];

                if(trackName === ""){
                    res.status(400).send('Veuillez ajouter un nom de morceau');
                    return
                }

                // Vérifier si les morceaux existent
                const song = await TrackModel.findOne({name: trackName, album: name});

                if(song){
                    res.status(400).send('Ce morceau existe déjà');
                    return
                }

                await moveFile(files[index], 'music/', artistName, name).then((fileSrc) => {
                    newTracks.push(TrackModel.create({
                        name: trackName,
                        artist: artistName,
                        album: name,
                        style: style,
                        file: fileSrc
                    }))
                })
            }
            Promise.all(newTracks).then(async(values) => {
                const trackList = [];
                values.forEach((value, index) => {
                    trackList.push({
                        id: value._id.toString(),
                        order: index+1,
                        name: value.name,
                    })
                })
    
                const updateAlbum = await AlbumModel.updateOne({name: name, artist_id: artistIdStr, date: date},{tracks: trackList})
                
                res.send('L\'album a bien été ajouté')
            })
        } else {
            if(tracksName === ""){
                res.status(400).send('Veuillez ajouter un nom de morceau');
                return
            }

            // Vérifier si les morceaux existent
            const song = await TrackModel.findOne({name: tracksName, album: name});

            if(song){
                res.status(400).send('Ce morceau existe déjà');
                return
            }

            await moveFile(files, 'music/' + artistName).then((fileSrc) => {
                TrackModel.create({
                    name: tracksName,
                    artist: artistName,
                    album: name,
                    style: style,
                    file: fileSrc
                })
                .then(async (value) => {
                    const trackList = [{
                        id: value._id.toString(),
                        order: 1,
                        name: value.name,
                    }];
    
                    const updateAlbum = await AlbumModel.updateOne({name: name, artist_id: artistIdStr, date: date},{tracks: trackList})
                    
                    res.send('L\'album a bien été ajouté')
                });
            }) 

        }  

    } catch (err){
        res.status(400).json({message: err.message});
    }
}