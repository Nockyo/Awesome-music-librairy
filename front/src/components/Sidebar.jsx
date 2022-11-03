import React, { useEffect } from "react"
import { useState } from "react";
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
        playlists,
        setPlaylists,
    } = props; 
    
    //Déconnexion
    const signOut = () => {
        instance.defaults.headers.common['authorization'] = 0;
        localStorage.removeItem('jwt');
        setIsConnected(false);
        setPlaylists([]);
        navigate("/");
    }

    //Gestion barre de recherche
    const handleSearchChange = (e) => {
        setSearchBar(e.target.value);
    }

    // Gestion affichage playlist
    useEffect(() => {
        instance
            .get("/getUserPlaylists")
            .then((res) => {
                setPlaylists(res.data[0].playlists);
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])

    // TODO ajouter système de dernière recherches à afficher quand le champ est vide
    useEffect(() => {
        if(searchBar === ""){
            setArtists("")
            setAlbums("")
            setTracks("")
            navigate("/");
        } else {
            instance
            .post("/search", {'search': searchBar})
            .then((res) => {
                setArtists(res.data[0])
                setAlbums(res.data[1])
                setTracks(res.data[2])
                navigate("searchResult");
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [searchBar]);

    const onClickAddClass = (selector, className) => {
        const iterator = document.querySelector(selector).classList.values()
        for (const value of iterator) {
            if(value === className){
                document.querySelector(selector).classList.remove(className) ;
                return
            }
        }

        document.querySelector(selector).classList.add(className) ;
    }

    return(
        <React.Fragment>
            <nav>
                <ul>
                    {   
                        playlists.length > 0 && 
                        <div className="playlistsContainer">
                            <button onClick={() => {onClickAddClass(".playlistsContainer", "active")}}>Playlist</button>
                            <ul className="playlists" >
                                    {
                                        playlists.map((playlist, index) => {
                                            return <li key={index}><Link to={`playlist/${index}`}>{playlist.name}</Link></li>
                                        })
                                    }
                            </ul>
                        </div>
                    }
                    <li className="homeCTA"><Link to="/">Home</Link></li>
                    <div className="navTop">
                        {!isConnected
                            ? <li><Link to="signIn">Sign in</Link></li> 
                            : <ul className="accountContainer">
                                <button onClick={() => {onClickAddClass(".accountContainer", "active")}}>Account</button>
                                <div className="account" >
                                    <li onClick={() => {signOut()}}>Sign out</li>
                                    {
                                        isAdmin &&
                                        <ul className="admin">Admin
                                            <li><Link to="admin/usersRights">Users Rights</Link></li>
                                            <li><Link to="admin/addMusic">add Music</Link></li>
                                            <li><Link to="admin/editMusic">edit Music</Link></li>
                                        </ul>
                                    }
                                </div>
                            </ul>
                        }
                    </div>
                </ul>
                <div className="userSearch">
                    <label htrmlfor="user-search" onClick={() => {onClickAddClass(".userSearch", 'active'); document.querySelector('.userSearch input').click()}}>Search</label>
                        <input type="search" name="user-search" onChange={handleSearchChange}></input>
                </div> 
            </nav>
        </React.Fragment>
    )
}