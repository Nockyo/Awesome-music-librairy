import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { UsersRights } from "./components/admin/usersRights";
import { AddMusic } from "./components/admin/addMusic";
import { Home } from "./components/Home";
// import { AlbumLibrary } from "./components/albumLibrary/albumLibrary";
import { SignIn } from "./components/SignIn-SignUp/SignIn";
import { SignUp } from "./components/SignIn-SignUp/SignUp";
import instance from "./utils/instanceHttp";
import { EditMusic } from "./components/admin/editMusic";
import { SideBar } from "./components/Sidebar";
import { Admin } from "./components/Admin";
import { Artist } from "./components/display/artist";
import { Album } from "./components/display/album";
import { SearchResult } from "./components/searchResult";
import { Playlist } from "./components/display/playlist";
import { CurrentPlaylist } from "./components/display/currentPlaylist";

// TODO Utiliser Redux pour setSearchBar
// TODO Pour aider à la navigation, permettre les précédent, garder un état de la page précédemment consultée
// TODO Gérer le problème de perte de la currentPlaylist si refresh de la page
// TODO Améliorer le système de lecture Album et Playlist, lancer une chanson ajoute l'ensemble, mais lance à partir de la chanson

function App() {
  const [isConnected, setIsConnected] = useState(!!localStorage.jwt);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchBar, setSearchBar] = useState('');
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists , setPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  useEffect(() => {
    instance
      .get("/admin")
      .then((res) => {
        setIsAdmin(true)
      })
      .catch(err => {
        setIsAdmin(false)
        console.log(err.response.data)
      })
  }, [isConnected])

  return (
    <Router>
      <SideBar 
        setIsConnected={setIsConnected}
        isConnected={isConnected}
        setIsAdmin={setIsAdmin}
        isAdmin={isAdmin}
        Link={Link}
        setSearchBar={setSearchBar}
        searchBar={searchBar}
        setArtists={setArtists}
        setAlbums={setAlbums}
        setTracks={setTracks}
        playlists={playlists}
        setPlaylists={setPlaylists}
      />
      
      {/* <AlbumLibrary /> */}
      <Routes>
        <Route path="/" element={<Home/>}>

          {/* Affichage de la musique */}
          <Route path="searchResult" element={<SearchResult
            artists={artists}
            albums={albums}
            tracks={tracks}
            setSearchBar={setSearchBar}
            searchBar={searchBar}
            setCurrentPlaylist={setCurrentPlaylist}
            currentPlaylist={currentPlaylist}
          />} />
          <Route path="artist" element={<Artist  setCurrentPlaylist={setCurrentPlaylist} currentPlaylist={currentPlaylist} />}/>
          <Route path="album" element={<Album setCurrentPlaylist={setCurrentPlaylist} currentPlaylist={currentPlaylist}/>}/>
          <Route path="playlist/:id" element={<Playlist playlists={playlists} currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist}/>}/>
          <Route path="currentPlaylist" element={<CurrentPlaylist currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist} />}/>

          {/* Inscription & Connexion */}
          <Route path="signIn" element={<SignIn setIsConnected={setIsConnected} />}/>
          <Route path="signUp" element={<SignUp />}/>

          {/* Fonctions admin */}
          <Route path="admin" element={<Admin 
            isConnected={isConnected}
            setIsAdmin={setIsAdmin}
          />}>
            <Route path="usersRights" element={<UsersRights />}/>
            <Route path="addMusic" element={<AddMusic />}/>
            <Route path="editMusic" element={<EditMusic />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
