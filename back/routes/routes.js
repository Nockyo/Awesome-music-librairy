import express from "express";
const router = express.Router();

import { register } from '../controllers/register.js'
import { login } from '../controllers/login.js'
import { search } from "../controllers/search.js";

//CONTROLLERS ADMIN
import { getUsers } from "../controllers/admin/getUsers.js";
import { editUser } from "../controllers/admin/editUser.js";
import { addArtist } from "../controllers/admin/addArtist.js";
import { addAlbum } from "../controllers/admin/addAlbum.js";
import { getMusic } from "../controllers/admin/getMusic.js";
import { deleteMusic } from "../controllers/admin/deleteMusic.js";
import { editMusic } from "../controllers/admin/editMusic.js";

//MIDDLEWARES
import { authentificateToken } from "../middlewares/authentificateToken.js";
import { authentificateAdmin } from "../middlewares/authentificateAdmin.js";
import parser from "../utils/parser.js";

//FONCTIONS GENERALES
router.post("/register", register);
router.post("/login", login);
router.get("/search", search)

//FONCTIONS ADMIN
router.get("/admin/getUsers", authentificateToken, authentificateAdmin, getUsers);
router.post("/admin/editUser", authentificateToken, authentificateAdmin, editUser);
router.get("/admin/getMusic", authentificateToken, authentificateAdmin, getMusic);
router.post("/admin/deleteMusic", authentificateToken, authentificateAdmin, deleteMusic);
router.post("/admin/editMusic", authentificateToken, authentificateAdmin, editMusic);
router.post("/admin/editUser", authentificateToken, authentificateAdmin, editUser);
router.post("/admin/addArtist", authentificateToken, authentificateAdmin, addArtist);
router.post("/admin/addAlbum", authentificateToken, authentificateAdmin, parser, addAlbum);

// FONCTIONS UTILISATEURS


export default router;