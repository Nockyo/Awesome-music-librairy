import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide")
            }
        },
    },
    biography: {
        type: String,
        required: true,
        trim: true,
        validate: value => {
            if(value === "" || value.length <= 100){
              throw new Error("champ vide ou trop court")
            }
        },
    },
    image: {
        type: String,
        required: true,
        default: "/images/artists/default_artist.jpg",
    },
    styles: {
        type: Array,
        required: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    users_likes: {
        type: Array,
        required: true,
        default: [],
    },
});

const ArtistModel = model("artist", ArtistSchema);
export default ArtistModel

