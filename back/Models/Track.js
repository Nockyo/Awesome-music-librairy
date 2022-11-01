import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TrackSchema = new Schema({
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
    album: {
        type: String,
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
    file: {
        type: String,
        required: true,
    },
    users_likes: {
        type: Array,
        required: true,
        default: [],
    },
    listened: {
        type: Number,
        required: true,
        default: 0,
    }
});

const TrackModel = model("track", TrackSchema);
export default TrackModel

