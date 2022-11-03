import React, { useEffect } from "react"
import { useState } from "react";
import instance from "../../utils/instanceHttp";

export const TrackMini = (props) => {
    const {
        track, 
        setCurrentPlaylist, 
        currentPlaylist,
        setCurrentTrackId,
    } = props;
    const [imageAlbum, setImageAlbum] = useState('');
    
    useEffect(() => {
        const formData = new FormData();
        formData.append('trackId', track._id);
        formData.append('albumName', track.album);

        // .classList.remove('active');

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
        setCurrentTrackId(trackId)
    }

    const addToCurrentPlaylist = (trackId) => {
        setCurrentPlaylist([...currentPlaylist, trackId])
    }

    const onClickOpen = (e) => {
        e.target.parentNode.parentNode.classList.add('active')
    }

    const onClickClose = (e) => {
        e.target.parentNode.parentNode.parentNode.classList.remove('active') ;
    }
    
    return (
        <div className="trackMini">
            <img 
                src={imageAlbum} 
                alt={track.name}
                onClick={() => {listen(track._id)}}
            />
            <div>
                <p>{track.name}</p>
                <p>{track.artist}</p>
                <p>{track.album}</p>
                <p>track</p>
                <div className="menuContainer">
                    <button onClick={(e) => {onClickOpen(e)}}><span className="material-symbols-outlined">more_horiz</span></button>
                    <ul className="menu">
                        <button onClick={(e) => {onClickClose(e)}}><span className="material-symbols-outlined">close</span></button>
                        <li><button >Add to playlist</button></li>
                        <li><button onClick={(e) => {addToCurrentPlaylist(track._id)}}>Add to current playlist</button></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}