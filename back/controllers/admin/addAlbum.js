import AlbumModel from "../../Models/Album.js";
import ArtistModel from "../../Models/Artist.js";
import TrackModel from "../../Models/Track.js";
import { moveFile } from "../../utils/moveFile.js";

export const addAlbum = async (req, res) => {
    let {name, artistId, date, style, tracksName, tracksDuration} = req.body;
    const image = req.files.image;
    const files = req.files.tracksFile;
    console.log(req.body)
    // console.log(req.files)

    try{
        const artist = await ArtistModel.findOne({_id: artistId}, {name: 1})
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

        await moveFile(image, 'images/albums/' + artist.name).then((imageSrc) => {
            const newAlbum = AlbumModel.create({
                name: name,
                artist: artist.name,
                artist_id: artistIdStr,
                date: date,
                style: style,
                tracks: [], 
                uploadedDate: Date.now(),
                image: imageSrc
            })
        })
        console.log("LOG 1")

        // Vérification qu'il y a bien le bon nombre de fichier
        if(tracksName.length !== files.length){
            res.status(400).send('Veuillez ajouter un fichier');
            return
        }

        console.log("LOG 2")
        const newTracks = [];
        for(const track in tracksName){
            const trackName = tracksName[track];
            const duration = tracksDuration[track];

            if(trackName === ""){
                res.status(400).send('Veuillez ajouter un nom de morceau');
                return
            }

            if(duration === 0){
                res.status(400).send('Veuillez ajouter une durée');
                return
            }

            console.log("LOG 3")
            // Vérifier si les morceaux existent
            const song = await TrackModel.findOne({name: trackName, album: name});

            if(song){
                res.status(400).send('Ce morceau existe déjà');
                return
            }

            await moveFile(files[track], 'music/' + artist.name).then((fileSrc) => {
                newTracks[track] = TrackModel.create({
                    name: trackName,
                    artist: artist.name,
                    album: name,
                    duration: duration,
                    style: style,
                    file: fileSrc
                })
            }) 
        }
        console.log("LOG 4")
        Promise.all(newTracks).then(async(values) => {
            const trackList = [];
            values.forEach((value, index) => {
                console.log('LOG')
                const id = value._id.toString()
                trackList.push({
                    id: id,
                    order: index+1,
                    name: value.name,
                })
            })

            const updateAlbum = await AlbumModel.updateOne({name: name, artist_id: artistIdStr, date: date},{tracks: trackList})
            
            res.send(req.body)
        })

    } catch (err){
        res.status(400).json({message: err.message});
    }
}