import React, { useState } from "react";
import { EditAlbum } from "./edit/editAlbum";
import { EditArtist } from "./edit/editArtist";
import { EditTrack } from "./edit/editTrack";
import { EditFormAlbum, EditFormArtist } from "./edit/editForms";

export const EditMusic = (props) => {
    const [select, setSelect] = useState('');
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState('');
    const [musicId, setMusicId] = useState('');
    const [edit, setEdit] = useState(false);

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
        setMusicId('');
        setEdit(false);
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
            {select === "artists" ? edit 
                ? <EditFormArtist 
                    setMessage={setMessage} 
                    musicId={musicId}
                />
                : <EditArtist 
                    setMessage={setMessage} 
                    search={search} 
                    select={select}
                    setEdit={setEdit}
                    musicId={musicId}
                    setMusicId={setMusicId}
                />
                : null
            }
            {select === "albums" ? edit 
                ? <EditFormAlbum 
                    setMessage={setMessage} 
                    musicId={musicId}
                />
                : <EditAlbum 
                    setMessage={setMessage} 
                    search={search} 
                    select={select}
                    setEdit={setEdit}
                    musicId={musicId}
                    setMusicId={setMusicId}
                />
                : null
            }
            {select === "tracks" ? <EditTrack 
                    setMessage={setMessage} 
                    search={search} 
                    select={select}
                    setEdit={setEdit}
                    musicId={musicId}
                    setMusicId={setMusicId}
                />
                : null
            }
            {edit && <button onClick={() => {setEdit(false)}}>Previous</button>}
        </React.Fragment>
     )
}