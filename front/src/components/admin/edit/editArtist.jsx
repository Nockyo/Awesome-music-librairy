import React, { useEffect, useState } from "react";
import instance from "../../../utils/instanceHttp";

export const EditArtist = (props) => {
    const {
        setMessage, 
        search, 
        select, 
        setEdit,
        setMusicId
    } = props;
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        instance
            .get('/getAllArtist')
            .then((res) => {
                setArtists(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])

    useEffect(() => {
        instance
            .post("../searchArtist", {'search': search})
            .then((res) => {
                setArtists(res.data);
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
                        .get('/getAllArtist')
                        .then((res) => {
                            setArtists(res.data);
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

    const onClickEdit = (e) => {
        setMusicId(e.target.parentElement.parentElement.attributes.tr_id.value);
        setEdit(true);
    }

    return(
        <React.Fragment>
            <h3>Edit Artist</h3>
            <table>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th className="hidden-sm">biography</th>
                        <th>style</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map((artist, index) => {                       
                        return <tr key={artist._id} tr_id={artist._id}>
                            <td><img src={artist.image} alt={artist.name} ></img></td>
                            <td>{artist.name}</td>
                            <td className="hidden-sm">{artist.biography}</td>
                            <td>{artist.style}</td>
                            <td>
                                <span
                                    className="material-symbols-outlined"
                                    onClick={(e) => {onClickEdit(e)}}
                                >
                                    edit
                                </span>
                            </td>
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