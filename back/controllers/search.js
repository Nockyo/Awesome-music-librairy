import AlbumModel from "../Models/Album.js";
import ArtistModel from "../Models/Artist.js";
import TrackModel from "../Models/Track.js";

export const search = async (req, res) => {
    const {search} = req.body;
    try {
        //Plusieurs requêtes : artists, albums, tracks.name, tracks.style, users.playlist, 
        const results = [];
        await results.push(
            ArtistModel.find({ $or: [ { name: { $regex: "(?i)"+search}},{ style: { $regex: "(?i)"+search} } ] }).limit(5),
            AlbumModel.find({$or: [{ name: { $regex: "(?i)"+search}},{style: { $regex: "(?i)"+search} }]}).limit(5),
            TrackModel.find({$or: [{ name: { $regex: "(?i)"+search}},{style: { $regex: "(?i)"+search} }]}).limit(5),
        );
        
        Promise.all(results).then((result) => {
            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
}