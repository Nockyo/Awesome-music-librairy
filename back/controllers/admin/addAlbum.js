import AlbumModel from "../../Models/Album.js";
import TrackModel from "../../Models/Track.js";
import { moveFile } from "../../utils/moveFile.js";

export const addAlbum = async (req, res) => {
    let {name, artist, date, style, tracks} = req.body;
    const image = req.files.image;
    const files = req.files;

    try{
        const album = await AlbumModel.findOne({name: name, artist: artist, date: date});

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

        await moveFile(image, 'images/albums/' + name).then((imageSrc) => {
            const newAlbum = AlbumModel.create({
                name: name,
                artist: artist,
                date: date,
                style: style,
                tracks: [], 
                image: imageSrc
            })
        })

        // Vérification qu'il y a bien le bon nombre de fichier
        if(Object.keys(tracks).length !== Object.keys(files).length-1){
            res.status(400).send('Veuillez ajouter un fichier');
            return
        }

        const newTracks = [];
        for(const track in tracks){
            const trackName = tracks[track][0];
            const duration = tracks[track][1];

            if(trackName === ""){
                res.status(400).send('Veuillez ajouter un nom de morceau');
                return
            }

            if(duration === 0){
                res.status(400).send('Veuillez ajouter une durée');
                return
            }

            // Vérifier si les morceaux existent
            const song = await TrackModel.findOne({name: trackName, album: name});

            if(song){
                res.status(400).send('Ce morceau existe déjà');
                return
            }

            await moveFile(files['tracks['+track+']'], 'music/'+name).then((fileSrc) => {
                newTracks[track] = TrackModel.create({
                    name: trackName,
                    artist: artist,
                    album: name,
                    duration: duration,
                    style: style,
                    file: fileSrc
                })
            })
            
        }

        Promise.all(newTracks).then(async(values) => {
            const trackList = [];
            values.forEach((value, index) => {
                const id = value._id.toString()
                trackList.push({
                    id: id,
                    order: index+1,
                    name: value.name,
                })
            })

            const updateAlbum = await AlbumModel.updateOne({name: name, artist: artist, date: date},{tracks: trackList})
            
            res.send(req.body)
        })

    } catch (err){
        res.status(400).json({message: err.message});
    }
}