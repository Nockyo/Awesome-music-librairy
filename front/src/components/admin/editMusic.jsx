import React, { useState } from "react";
import { EditAlbum } from "./editAlbum";
import { EditArtist } from "./editArtist";
import { EditTrack } from "./editTrack";

export const EditMusic = (props) => {
    const [select, setSelect] = useState('');
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState('');

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

     return(
        <React.Fragment>
            <h2>Edit Music</h2>
            <p>{message}</p>
            <label htrmlfor="collection-select">Choose a collection :
                <select name="collection-select" onChange={handleSelectChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="artists">Artists</option>
                    <option value="albums">Albums</option>
                    <option value="tracks">Tracks</option>
                </select>
            </label>
            <label htrmlfor="user-search">
                Search :
                <input type="search" name="user-search" onChange={handleSearchChange}></input>
            </label>
            {
                select === "artists" && <EditArtist 
                    setMessage={setMessage} 
                    search={search} 
                />
            }
            {
                select === "albums" && <EditAlbum 
                    setMessage={setMessage} 
                    search={search} 
                />
            }
            {
                select === "tracks" && <EditTrack 
                    setMessage={setMessage} 
                    search={search} 
                />
            }
        </React.Fragment>
     )
}