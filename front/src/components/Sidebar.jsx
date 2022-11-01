import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import instance from "../utils/instanceHttp";

export const SideBar= (props) => {
    const navigate = useNavigate();
    const {
        setIsConnected, 
        isConnected,
        isAdmin,
        setSearchBar,
        searchBar,
        Link,
        setArtists,
        setAlbums,
        setTracks,
        setUsersPlaylists,
    } = props;
    
    //Déconnexion
    const signOut = () => {
        instance.defaults.headers.common['authorization'] = 0;
        localStorage.removeItem('jwt');
        setIsConnected(false);
        navigate("/");
    }

    //Gestion barre de recherche
    const handleSearchChange = (e) => {
        setSearchBar(e.target.value);
    }

    useEffect(() => {
        instance
            .post("/search", {'search': searchBar})
            .then((res) => {
                setArtists(res.data[0])
                setAlbums(res.data[1])
                setTracks(res.data[2])
                setUsersPlaylists(res.data[3])
            })
            .catch(err => {
                console.log(err)
            })
    }, [searchBar]);

    return(
        <React.Fragment>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                {!isConnected
                    ? <li><Link to="signIn">Sign in</Link></li> 
                    : <li onClick={() => {signOut()}}>Sign out</li>
                }
                {
                    isAdmin &&
                    <ul>admin
                    <li><Link to="admin/usersRights">Users Rights</Link></li>
                    <li><Link to="admin/addMusic">add Music</Link></li>
                    <li><Link to="admin/editMusic">edit Music</Link></li>
                    </ul>
                }
                </ul>
            </nav>
            <label htrmlfor="user-search">
                Search :
                <input type="search" name="user-search" onChange={handleSearchChange}></input>
            </label>
        </React.Fragment>
    )
}