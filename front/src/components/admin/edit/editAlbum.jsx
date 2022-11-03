import React, { useEffect, useState } from "react";
import instance from "../../../utils/instanceHttp";

export const EditAlbum = (props) => {
    const {
        setMessage, 
        search, 
        select, 
        setEdit,
        setMusicId
    } = props;
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        instance
            .get('/getAllAlbum')
            .then((res) => {
                setAlbums(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])

    useEffect(() => {
        instance
            .post("../searchAlbum", {'search': search})
            .then((res) => {
                setAlbums(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [search]);

    //Suppression de l'album
    const onClickDelete = (e) => {
        let id = e.target.parentElement.parentElement.attributes.tr_id.value;
        if (window.confirm("Are you sure ?")) {
            if (window.confirm("Do you want to delete all album's tracks ?")) {

                let trackList = [];
                //Supprimer les tracks de l'album
                instance
                    .post('/getAlbum', {'albumId': id})
                    .then((res) => {
                        trackList = res.data.tracks;

                        trackList.forEach((value) => {
                            const trackId = value.id;

                            instance
                                .post("deleteMusic", {'collection': "tracks", id: trackId})
                                .then((res) => {
                                    // TODO Améliorer le système de message
                                    console.log(res)
                                })
                                .catch(err => {
                                    console.log(err.response.data)
                                })
                        })

                    })
                    .catch(err => {
                        console.log(err.response.data)
                    })
            }

            // Supprimer l'album
            instance
                .post("deleteMusic", {'collection': select, id: id})
                .then((res) => {
                    setMessage(res.data);
                    instance
                        .get('/getAllAlbum')
                        .then((res) => {
                            setAlbums(res.data);
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

    //Edition de l'album
    const onClickEdit = (e) => {
        setMusicId(e.target.parentElement.parentElement.attributes.tr_id.value);
        setEdit(true);
    }

    return(
        <React.Fragment>
            <h3>Edit Album</h3>
            <table>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>artist</th>
                        <th className="hidden-sm">date</th>
                        <th className="hidden-sm">style</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album, index) => {                       
                        return <tr key={album._id} tr_id={album._id}>
                            <td><img src={album.image} alt={album.name}></img></td>
                            <td>{album.name}</td>
                            <td>{album.artist}</td>
                            <td className="hidden-sm">{album.date}</td>
                            <td className="hidden-sm">{album.style}</td>
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