import ArtistModel from "../../Models/Artist.js";

export const likeArtist = async (req,res) => {
    const {artistId} = req.body;
    const {id} = req.data.data;
    try {
        const userLike = await ArtistModel.findOne({$and:[{_id: artistId},{users_likes: id}]});
        if(userLike){
            //supprimer le userName du tableau user_likes
            const artistUnliked = await ArtistModel.updateOne({_id: artistId},{$pull: {users_likes: id}});

            if(artistUnliked.modifiedCount === 0){
                res.status(400).send('L\'artiste n\'a pas pu être disliké')
                return
            }          
            
            res.send('Artiste disliké')
        } else {
            //Ajouter le userName dans le tableau user_likes
            const artistLiked = await ArtistModel.updateOne({_id: artistId},{$push: {users_likes: id}});

            if(artistLiked.modifiedCount === 0){
                res.status(400).send('L\'artiste n\'a pas pu être liké')
                return
            }

            res.send('Artiste liké');
        }    
    } catch (err) {
        res.status(400).send(err.message)
    }
}