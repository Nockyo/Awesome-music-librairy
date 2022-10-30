import React from "react"
import { useState } from "react";
import { AddAlbum } from "./addAlbum";
import { AddArtist } from "./addArtist";

export const AddMusic = (props) => {
    const [select, setSelect] = useState('');
    const [message, setMessage] = useState('');

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    return (
        <React.Fragment>
            <h2>Add Music</h2>
            <p>{message}</p>
            <label htrmlfor="collection-select">Choose a collection :
                <select name="collection-select" onChange={handleSelectChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="artists">Artists</option>
                    <option value="albums">Albums</option>
                </select>
            </label>
            {select === "artists" && <AddArtist setMessage={setMessage} />}
            {select === "albums" && <AddAlbum setMessage={setMessage} />}
        </React.Fragment>
    )
}