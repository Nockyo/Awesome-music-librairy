import TrackModel from "../../Models/Track.js"

export const likeTrack = async (req,res) => {
    const {trackId} = req.body;
    const {id} = req.data.data;
    try {
        const userLike = await TrackModel.findOne({$and:[{_id: trackId},{users_likes: id}]});

        if(userLike){
            //supprimer le userName du tableau user_likes
            const trackUnliked = await TrackModel.updateOne({_id: trackId},{$pull: {users_likes: id}});

            if(trackUnliked.modifiedCount === 0){
                res.status(400).send('Le morceau n\'a pas pu être disliké')
                return
            } 
            
            res.send('Morceau disliké')
        } else {
            //Ajouter le userName dans le tableau user_likes
            const trackLiked = await TrackModel.updateOne({_id: trackId},{$push: {users_likes: id}});

            if(trackLiked.modifiedCount === 0){
                res.status(400).send('Le morceau n\'a pas pu être liké')
                return
            }

            res.send('Morceau liké')
        } 
    } catch (err) {
        res.status(400).send(err.message)
    }
}