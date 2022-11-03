import React, { useState, useEffect } from "react";
import instance from "../../utils/instanceHttp";
import { getCurrentTrackIndex } from "../../utils/utils";

export const CurrentPlaylist = (props) => {
    const {
        currentPlaylist, 
        setCurrentPlaylist, 
        setCurrentTrackId
    } = props;
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if(currentPlaylist.length > 0 ){
            instance
            .post("/getPlaylist", {playlistTracks: currentPlaylist})
            .then((res) => {
                setTracks(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else {
            setTracks([])
        }
    }, [currentPlaylist])

    const deleteFromCurrentPlaylist = (trackIndex) => {
        const newCurrentPlaylist = currentPlaylist.filter((track, index) => index !== trackIndex);
        setCurrentPlaylist(newCurrentPlaylist)
    }

    const deleteAllCurrentPlaylist = () => {
        setCurrentPlaylist([])
    }

    const listen = (trackId) => {
        const index = getCurrentTrackIndex(currentPlaylist, trackId)
        setCurrentTrackId(currentPlaylist[index])
    }

    return(
        <div className="currentPLaylist">
            <h2>Current playlist</h2>
            {
                currentPlaylist.length > 0 && 
                <React.Fragment>
                    <button onClick={() => {deleteAllCurrentPlaylist()}}>DELETE ALL</button>
                    <table>
                        <thead>
                            <tr>
                                <th>order</th>
                                <th>name</th>
                                <th>artist</th>
                                <th>album</th>
                                <th>style</th>
                                <th>COEUR</th>
                                <th>SVG MENU</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tracks.map((track, index) => {                       
                                return <tr key={index}>
                                    <td onClick={() => {listen(track._id)}}>{index + 1}</td>
                                    <td>{track.name}</td>
                                    <td>{track.artist}</td>
                                    <td>{track.album}</td>
                                    <td>{track.style}</td>
                                    <td><button>COEUR</button></td>
                                    <td><button onClick={() => {deleteFromCurrentPlaylist(index)}}>DELETE</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </React.Fragment>
            }
        </div>
    )
}