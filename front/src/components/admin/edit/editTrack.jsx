import React, { useEffect, useState } from "react";
import instance from "../../../utils/instanceHttp";

export const EditTrack = (props) => {
    const {
        setMessage, 
        search, 
        select,
    } = props;
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        instance
            .get('/getAllTrack')
            .then((res) => {
                setTracks(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])

    useEffect(() => {
        instance
            .post("../searchTrack", {'search': search})
            .then((res) => {
                setTracks(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [search]);

    const onClickDelete = (e) => {
        let id = e.target.parentElement.parentElement.attributes.tr_id.value;
        if (window.confirm("Are you sure ?")) {
            instance
                .post("deleteMusic", {'collection': select, id: id})
                .then((res) => {
                    setMessage(res.data);
                    instance
                        .get('/getAllTrack')
                        .then((res) => {
                            setTracks(res.data);
                        })
                        .catch(err => {
                            console.log(err.response.data)
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return(
        <React.Fragment>
            <h3>Edit Track</h3>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>artist</th>
                        <th>album</th>
                        <th>style</th>
                        <th>duration</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map((track, index) => {                       
                        return <tr key={track._id} tr_id={track._id}>
                            <td>{track.name}</td>
                            <td>{track.artist}</td>
                            <td>{track.album}</td>
                            <td>{track.style}</td>
                            <td>{track.duration}</td>
                            <td>
                                <span
                                    className="material-symbols-outlined"
                                    onClick={(e) => {onClickDelete(e)}}
                                >
                                    delete
                                </span>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}