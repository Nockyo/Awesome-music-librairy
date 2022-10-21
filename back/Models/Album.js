import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    artist: {
        type: String,
        required: true,
        trim: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    artist_id: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
        trim: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    style: {
        type: String,
        required: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    tracks: {
        type: Array,
        required: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    uploadedDate: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    users_likes: {
        type: Array,
        required: true,
        default: [],
    }
});

const AlbumModel = model("album", AlbumSchema);
export default AlbumModel

