import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import upload from "express-fileupload";
import cors from 'cors';

import route from "./routes/routes.js"

dotenv.config();
const {APP_HOST, APP_PORT, DB_URL} = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(init);

async function init() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(upload({createParentPath: true}));
    app.use(express.static(path.join(__dirname, "public")));
    try{
        app.use(route);
    } catch (err) {
        console.error(err.message);
    };
    app.listen(APP_PORT, () => {
        console.log(`App listening at http://${APP_HOST}:${APP_PORT}`);
    });
}