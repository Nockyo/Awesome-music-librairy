import AlbumModel from "../../Models/Album.js";

export const likeAlbum = async (req,res) => {
    const {albumId} = req.body;
    const {id} = req.data.data;
    try {
        const userLike = await AlbumModel.findOne({$and:[{_id: albumId},{users_likes: id}]});
        if(userLike){
            //supprimer le userName du tableau user_likes
            const albumUnliked = await AlbumModel.updateOne({_id: albumId},{$pull: {users_likes: id}});

            if(albumUnliked.modifiedCount === 0){
                res.status(400).send('L\'artiste n\'a pas pu être disliké')
                return
            }     

            res.send('Album disliké')      
        } else {
            //Ajouter le userName dans le tableau user_likes
            const albumLiked = await AlbumModel.updateOne({_id: albumId},{$push: {users_likes: id}});

            if(albumLiked.modifiedCount === 0){
                res.status(400).send('L\'artiste n\'a pas pu être liké')
                return
            }

            res.send('Album liké')
        } 
    } catch (err) {
        res.status(400).send(err.message)
    }
}