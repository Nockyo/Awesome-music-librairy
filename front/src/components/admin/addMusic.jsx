import React from "react"
import { useState } from "react";
import { AddAlbum } from "./addAlbum";
import { AddArtist } from "./addArtist";

export const AddMusic = (props) => {
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState('');
    const [message, setMessage] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    
    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    return (
        <React.Fragment>
            <h2>Add Music</h2>
            <p>{message}</p>
            <label htrmlfor="collection-select">Choose a pet:</label>
            <select name="pets" id="collection-select" onChange={handleSelectChange}>
                <option value="">--Please choose an option--</option>
                <option value="artists">Artists</option>
                <option value="albums">Albums</option>
            </select>
            <label htrmlfor="user-search">
                Search a music :
                <input type="search" name="user-search" onChange={handleSearchChange}></input>
            </label>
            {select === "artists" && <AddArtist />}
            {select === "albums" && <AddAlbum />}
        </React.Fragment>
    )
}