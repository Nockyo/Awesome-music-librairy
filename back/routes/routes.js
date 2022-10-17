import express from "express";
const router = express.Router();

import { register } from '../controllers/register.js'
import { login } from '../controllers/login.js'

import { getUsers } from "../controllers/admin/getUsers.js";
import { editUser } from "../controllers/admin/editUser.js";
import { getArtists } from "../controllers/admin/getArtists.js";
import { addArtist } from "../controllers/admin/addArtist.js";
import { addAlbum } from "../controllers/admin/addAlbum.js";

import { authentificateToken } from "../middlewares/authentificateToken.js";
import { authentificateAdmin } from "../middlewares/authentificateAdmin.js";

router.post("/register", register);
router.post("/login", login);

//FONCTIONS ADMIN
router.get("/admin/getUsers", authentificateToken, authentificateAdmin, getUsers);
router.post("/admin/editUser", authentificateToken, authentificateAdmin, editUser);
router.get("/admin/getArtists", authentificateToken, authentificateAdmin, getArtists);
router.post("/admin/addArtist", authentificateToken, authentificateAdmin, addArtist);
router.post("/admin/addAlbum", authentificateToken, authentificateAdmin, addAlbum);

export default router;