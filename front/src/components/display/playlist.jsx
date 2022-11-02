import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../../utils/instanceHttp";

export const Playlist = (props) => {
    const { id } = useParams();
    const {playlists,
        currentPlaylist,
        setCurrentPlaylist
    } = props;
    const playlist = playlists[id];
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if(playlist.tracks.length > 0 ){
            instance
            .post("/getPlaylist", {playlistTracks: playlist.tracks})
            .then((res) => {
                setTracks(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else {
            setTracks([])
        }
    }, [id])

    //Gestion lecture musique
    const listenPlaylist = (playlistTracks) => {
        const newCurrentPlaylist = [];
        playlistTracks.map((track) => {
            newCurrentPlaylist.push(track._id);
        })
        setCurrentPlaylist(newCurrentPlaylist);
    }

    const addTrackToCurrentPlaylist = (playlistTracks) => {
        const newCurrentPlaylist = currentPlaylist;
        playlistTracks.map((track) => {
            newCurrentPlaylist.push(track._id);
        })
        setCurrentPlaylist(newCurrentPlaylist);
    }

    return(
        <div className="playlist">
            <h2>{playlist.name}</h2>

            {
                tracks.length > 0 && 
                <React.Fragment>
                    <button onClick={() => {listenPlaylist(tracks)}}>Listen</button>
                    <button onClick={() => {addTrackToCurrentPlaylist(tracks)}}>Add to current playlist</button>
                    <table>
                        <thead>
                            <tr>
                                <th>order</th>
                                <th>name</th>
                                <th>artist</th>
                                <th>album</th>
                                <th>style</th>
                                <th>SVG MENU</th>
                                <th>COEUR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tracks.map((track, index) => {                       
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{track.name}</td>
                                    <td>{track.artist}</td>
                                    <td>{track.album}</td>
                                    <td>{track.style}</td>
                                    <td><button>COEUR</button></td>
                                    <td>SVG MENU</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </ React.Fragment>
            } 
        </div>
    )
}