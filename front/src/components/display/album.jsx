import React, { useEffect } from "react"
import { useState } from "react";
import { useLocation } from "react-router-dom"
import instance from "../../utils/instanceHttp";

export const Album = (props) => {
    const {state} = useLocation();
    const {album} = state;
    const {
        currentPlaylist, 
        setCurrentPlaylist,
        setCurrentTrackId,
    } = props;
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        instance
            .post("/getAlbumTracks", {albumId: album._id})
            .then((res) => {
                setTracks(res.data)
            })
            .catch((err) => {
                console.log(err.reponse)
            })
    }, [album])

    //Gestion lecture musique
    const listen = (trackId) => {
        setCurrentPlaylist([trackId])
        setCurrentTrackId(trackId)
    }

    const listenAlbum = (albumTracks) => {
        const newCurrentPlaylist = [];
        albumTracks.forEach((track) => {
            newCurrentPlaylist.push(track.id)
        })
        setCurrentPlaylist(newCurrentPlaylist)
        setCurrentTrackId(newCurrentPlaylist[0])
    }

    const addTrackToCurrentPlaylist = (trackId) => {
        setCurrentPlaylist([...currentPlaylist, trackId])
    }

    const addAlbumToCurrentPlaylist = (albumTracks) => {
        const newCurrentPlaylist = currentPlaylist;
        albumTracks.forEach((track) => {
            newCurrentPlaylist.push(track.id)
        })
        setCurrentPlaylist(newCurrentPlaylist)
    }
    
    return (
        <div className="album">
            <div className="infos">
                <img src={album.image} alt={album.name} style={{width: 100+'px'}} />
                <p>{album.name}</p>
                <p>{album.artist}</p>
                <p>{album.date}</p>
                <p>{album.style}</p>
                <div className="buttons">
                    <button onClick={() => {listenAlbum(album.tracks)}}>Listen</button>
                    <button onClick={() => {addAlbumToCurrentPlaylist(album.tracks)}} >Add next</button>
                </div>
            </div>
            <div className="tracks">
                <table>
                    <thead>
                        <tr>
                            <th>order</th>
                            <th>name</th>
                            <th>listened</th>
                            <th>menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((track, index) => {                       
                            return <tr key={index}>
                                <td onClick={() => {listen(track._id)}}  >{index+1}</td>
                                <td>{track.name}</td>
                                <td>{track.listened}</td>
                                <td><button onClick={() => {addTrackToCurrentPlaylist(track._id)}}>Add next</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

//image
//name