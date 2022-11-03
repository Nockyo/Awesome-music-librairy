import express from "express";
const router = express.Router();

import { register } from '../controllers/register.js'
import { login } from '../controllers/login.js'
import { search } from "../controllers/search.js";

//CONTROLLERS DISPLAY
import { getTrack } from "../controllers/display/getTrack.js";
import { getAlbumTracks } from "../controllers/display/getAlbumTracks.js";
import { getPlaylist } from "../controllers/display/getPlaylist.js";
import { getUserPlaylists } from "../controllers/display/getUserPlaylists.js";
import { getAlbum } from "../controllers/display/getAlbum.js";
import { getAlbumImageFromTrackId } from "../controllers/display/getAlbumImageFromTrackId.js";
import { getArtist } from "../controllers/display/getArtist.js";
import { getArtistByName } from "../controllers/display/getArtistByName.js";
import { getAllArtist } from "../controllers/display/getAllArtist.js";
import { getAllAlbum } from "../controllers/display/getAllAlbum.js";
import { getAllAlbumByUploadedDate } from "../controllers/display/getAllAlbumByUploadedDate.js";
import { getAllAlbumByStyle } from "../controllers/display/getAllAlbumByStyle.js";
import { getAllTrack } from "../controllers/display/getAllTrack.js";
import { getArtistAlbums } from "../controllers/display/getArtistAlbums.js";
import { searchArtist } from "../controllers/display/searchArtist.js";
import { searchAlbum } from "../controllers/display/searchAlbum.js";
import { searchTrack } from "../controllers/display/searchTrack.js";

//CONTROLLERS HOME
import { getUserHistory } from "../controllers/home/getUserHistory.js";
import { getLastUpdatedAlbum } from "../controllers/home/getLastUpdatedAlbum.js";

//CONTROLLERS PLAYER
import { addHistory } from "../controllers/player/addHistory.js";
import { addListened } from "../controllers/player/addListened.js";

//CONTROLLERS ADMIN
import { admin } from "../controllers/admin.js";
import { getUsers } from "../controllers/admin/getUsers.js";
import { editUser } from "../controllers/admin/editUser.js";
import { addArtist } from "../controllers/admin/addArtist.js";
import { addAlbum } from "../controllers/admin/addAlbum.js";
import { getMusic } from "../controllers/admin/getMusic.js";
import { deleteMusic } from "../controllers/admin/deleteMusic.js";
import { editMusic } from "../controllers/admin/editMusic.js";
import { searchUser } from "../controllers/admin/searchUser.js";

//MIDDLEWARES
import { authentificateToken } from "../middlewares/authentificateToken.js";
import { authentificateAdmin } from "../middlewares/authentificateAdmin.js";
import parser from "../utils/parser.js";

// CONTROLLERS PLAYLIST
import { createPlaylist } from "../controllers/playlist/createPlaylist.js";
import { deletePlaylist } from "../controllers/playlist/deletePlaylist.js";
import { addTrackToPlaylist } from "../controllers/playlist/addTrackToPlaylist.js";
import { deletePlaylistTrack } from "../controllers/playlist/deletePlaylistTrack.js";
import { renamePlaylist } from "../controllers/playlist/renamePlaylist.js";
import { editOrderPlaylistTracks } from "../controllers/playlist/editOrderPlaylistTracks.js";

// CONTROLLERS LIKE
import { likeTrack } from "../controllers/like/likeTrack.js";
import { likeAlbum } from "../controllers/like/likeAlbum.js";
import { likeArtist } from "../controllers/like/likeArtist.js";

//ROUTER GENERALES
router.post("/register", register);
router.post("/login", login);
router.post("/search", authentificateToken, search);

// ROUTER DISPLAY
router.post("/getTrack", authentificateToken, getTrack);
router.post("/getAlbum", authentificateToken, getAlbum);
router.post("/getAlbumImageFromTrackId", authentificateToken, getAlbumImageFromTrackId)
router.post("/getArtist", authentificateToken, getArtist);
router.post("/getArtistByName", authentificateToken, getArtistByName);
router.get("/getAllArtist", authentificateToken, getAllArtist);
router.get("/getAllAlbum", authentificateToken, getAllAlbum);
router.get("/getAllAlbumByUploadedDate", authentificateToken, getAllAlbumByUploadedDate);
router.post("/getAllAlbumByStyle", authentificateToken, getAllAlbumByStyle);
router.get("/getAllTrack", authentificateToken, getAllTrack);
router.post("/getAlbumTracks", authentificateToken, getAlbumTracks);
router.post("/getArtistAlbums", authentificateToken, getArtistAlbums);
router.post("/getPlaylist", authentificateToken, getPlaylist);
router.get("/getUserPlaylists", authentificateToken, getUserPlaylists)

// ROUTER HISTORIQUES
router.get("/getUserHistory", authentificateToken, getUserHistory);
router.get("/getLastUpdatedAlbum", authentificateToken, getLastUpdatedAlbum);

// ROUTER PLAYER
router.post("/addHistory", authentificateToken, addHistory);
router.post("/addListened", authentificateToken, addListened);

// ROUTER ADMIN
router.get("/admin", authentificateToken, authentificateAdmin, admin);
    // UTILISATEURS
router.get("/admin/getUsers", authentificateToken, authentificateAdmin, getUsers);
router.post("/admin/editUser", authentificateToken, authentificateAdmin, editUser);
    // MUSIQUES
router.get("/admin/getMusic", authentificateToken, authentificateAdmin, getMusic);
router.post("/admin/deleteMusic", authentificateToken, authentificateAdmin, deleteMusic);
router.post("/admin/editMusic", authentificateToken, authentificateAdmin, editMusic);
router.post("/admin/editUser", authentificateToken, authentificateAdmin, editUser);
router.post("/admin/addArtist", authentificateToken, authentificateAdmin, addArtist);
router.post("/admin/addAlbum", authentificateToken, authentificateAdmin, parser, addAlbum);
    // RECHERCHES
router.post("/admin/searchUser", authentificateToken, authentificateAdmin, searchUser);
router.post("/searchTrack", authentificateToken, searchTrack);
router.post("/searchAlbum", authentificateToken, searchAlbum);
router.post("/searchArtist", authentificateToken, searchArtist);

// ROUTER PLAYLIST
router.post("/createPlaylist", authentificateToken, createPlaylist);
router.post("/deletePlaylist", authentificateToken, deletePlaylist);
router.post("/addTrackToPlaylist", authentificateToken, addTrackToPlaylist);
router.post("/deletePlaylistTrack", authentificateToken, deletePlaylistTrack);
router.post("/renamePlaylist", authentificateToken, renamePlaylist);
router.post("/editOrderPlaylistTracks", authentificateToken, editOrderPlaylistTracks);

// ROUTER LIKE
router.post("/likeTrack", authentificateToken, likeTrack);
router.post("/likeAlbum", authentificateToken, likeAlbum);
router.post("/likeArtist", authentificateToken, likeArtist);

export default router;