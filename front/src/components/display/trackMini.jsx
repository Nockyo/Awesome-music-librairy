import React, { useEffect } from "react"
import { useState } from "react";
import instance from "../../utils/instanceHttp";

export const TrackMini = (props) => {
    const {
        track, 
        setCurrentPlaylist, 
        currentPlaylist
    } = props;
    const [imageAlbum, setImageAlbum] = useState('');
    
    useEffect(() => {
        const formData = new FormData();
        formData.append('trackId', track._id);
        formData.append('albumName', track.album);

        instance
            .post("/getAlbumImageFromTrackId", formData)
            .then((res) => {
                setImageAlbum(res.data.image);
            })
            .catch(err => {
                console.log(err)
            })
    }, [track])

    //Gestion lecture musique
    const listen = (trackId) => {
        setCurrentPlaylist([trackId])
    }

    const addToCurrentPlaylist = (trackId) => {
        setCurrentPlaylist([...currentPlaylist, trackId])
    }
    
    return (
        <div className="trackMini">
            <img 
                src={imageAlbum} 
                alt={track.name} 
                style={{width: 100+'px'}}
                onClick={() => {listen(track._id)}}
            />
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button>Menu</button>
            <ul className="menu">
                <li>Add to playlist</li>
                <li><button onClick={() => {addToCurrentPlaylist(track._id)}}>Add to current playlist</button></li>
            </ul>
            <p>track</p>
        </div>
    )
}