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

function App() {
  const [isConnected, setIsConnected] = useState(!!localStorage.jwt);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchBar, setSearchBar] = useState('');
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [usersPlaylists, setUsersPlaylists] = useState([]);

  //TODO Utiliser ce système pour renvoyer sur la home dans les components admin si pas admin
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
        setUsersPlaylists={setUsersPlaylists}
      />
      
      {/* <AlbumLibrary /> */}
      <Routes>
        <Route index element={<Home
          artists={artists}
          albums={albums}
          tracks={tracks}
          usersPlaylists={usersPlaylists}
          searchBar={searchBar}
        />}/>
        <Route path="signIn" element={<SignIn setIsConnected={setIsConnected} />}/>
        <Route path="signUp" element={<SignUp />}/>
        <Route path="admin/usersRights" element={<UsersRights />}/>
        <Route path="admin/addMusic" element={<AddMusic />}/>
        <Route path="admin/editMusic" element={<EditMusic />} />
      </Routes>
    </Router>
  );
}

export default App;
