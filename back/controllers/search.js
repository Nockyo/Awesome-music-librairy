import AlbumModel from "../Models/Album.js";
import ArtistModel from "../Models/Artist.js";
import TrackModel from "../Models/Track.js";
import UserModel from "../Models/User.js";

export const search = async (req, res) => {
    const {search} = req.body
    try {
        //Plusieurs requêtes : artists, albums, tracks.name, tracks.style, users.playlist, 
        const results = [];
        await results.push(
            ArtistModel.find({ $or: [ { name: { $regex: "(?i)"+search}},{ style: { $regex: "(?i)"+search} } ] }),
            AlbumModel.find({$or: [{ name: { $regex: "(?i)"+search}},{style: { $regex: "(?i)"+search} }]}),
            TrackModel.find({$or: [{ name: { $regex: "(?i)"+search}},{style: { $regex: "(?i)"+search} }]}),
            UserModel.find({ playlist: { name: {$regex: '(?i)'+search}} })
        )
        
        Promise.all(results).then((result) => {
            res.send(result)
        })
    } catch (err) {
        res.send(err.message)
    }
}