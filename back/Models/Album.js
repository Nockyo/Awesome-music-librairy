import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    },
    date: {
        type: Date,
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
    pochette: {
        type: String,
        required: true,
        default: "/images/albums/default_album.jpg",
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
    songs: {
        type: Array,
        required: true,
        validate: value => {
            if(value === ""){
              throw new Error("champ vide");
            }
        },
    }
});

const AlbumModel = model("album", AlbumSchema);
export default AlbumModel

