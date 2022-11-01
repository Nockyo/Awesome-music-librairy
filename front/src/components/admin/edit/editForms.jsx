import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../../../utils/instanceHttp";

export const EditFormArtist = (props) => {
    const {register, handleSubmit} = useForm();
    const {
        setMessage,
        musicId
    } = props;
    const [artist, setArtist] = useState({});

    useEffect(() => {
        instance
            .post('/getArtist', {'artistId': musicId})
            .then((res) => {
                setArtist(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }, [])

    const onSubmit = (data) => {
        console.log(data)
        if (window.confirm("Are you sure ?")) {
            const formData = new FormData();
            formData.append('collection', 'artists');
            formData.append('id', musicId);

            // Si la valeur n'a pas été changé on réattribut la valeur récupéré en BDD
            if(data.name === ''){
                formData.append('name', artist.name);
            } else {
                formData.append('name', data.name);
            }

            if(data.biography === ''){
                formData.append('biography', artist.biography);
            } else {
                formData.append('biography', data.biography);
            }

            if(data.style === ''){
                formData.append('style', artist.style);
            } else {
                formData.append('style', data.style);
            }

            if(data.image.length === 0){
                formData.append('image', artist.image);
            } else {
                formData.append('image', data.image[0]);
            }
            
            instance
                .post('editMusic', formData)
                .then((res) => {
                    console.log(res.data)
                    setMessage(res.data);
                })
                .catch(err => {
                    setMessage(err.response.data)
                })
        }
    }

    return(
        <React.Fragment>
            <h3>Edit Artist</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htrmlfor="name">
                    Enter an artist name :
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={artist.name}
                        {...register("name")} 
                    />
                </label>
                <label htrmlfor="biography">
                    Enter a biography <span>(100 letterings minimum) </span> :
                    <textarea 
                        name="biography" 
                        defaultValue={artist.biography}
                        rows="5" 
                        cols="33" 
                        {...register("biography")} 
                    />
                </label>
                <label htrmlfor="style">
                    Enter a style :
                    <input 
                    type="text" 
                    name="style" 
                    defaultValue={artist.style}
                    {...register("style")} 
                />
                </label>
                <label htrmlfor="image">
                    Choose a picture:
                    <input 
                    type="file" 
                    name="image" 
                    defaultValue={artist.image}
                    accept="image/png, image/jpeg" 
                    {...register("image")} 
                />
                </label>
                <input type="submit" value="Upload" />
            </form>
        </React.Fragment>
    )
}

export const EditFormAlbum = (props) => {
    const {register, handleSubmit} = useForm();
    const {
        setMessage,
        musicId
    } = props;
    const [album, setAlbum] = useState({});
    const [artists, setArtists] = useState([]);
    const [trackList, setTrackList] = useState([]);

    
    useEffect(() => {
        //Récupérer l'ensemble des artistes
        instance
            .get('/getAllArtist')
            .then((res) => {
                setArtists(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })
        
        //Récupérer l'album à modifier
        instance
            .post('/getAlbum', {'albumId': musicId})
            .then((res) => {
                setAlbum(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })

        //Récupérer la trackList de l'album
        instance
            .post('/getAlbumTracks', {'albumId': musicId})
            .then((res) => {
                console.log(res.data)
                setTrackList(res.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])

    //Soumettre le formulaire
    const onSubmit = (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append('collection', 'albums');
        formData.append('id', musicId);

        // Si la valeur n'a pas été changé on réattribut la valeur récupéré en BDD
        if(data.name === ''){
            formData.append('name', album.name);
        } else {
            formData.append('name', data.name);
        }

        if(data.artistId === ''){
            formData.append('artistId', album.artist_id);
        } else {
            formData.append('artistId', data.artistId);
        }

        if(data.date === ''){
            formData.append('date', album.date);
        } else {
            formData.append('date', data.date);
        }

        if(data.style === ''){
            formData.append('style', album.style);
        } else {
            formData.append('style', data.style);
        }

        if(data.image.length === 0){
            formData.append('image', album.image);
        } else {
            formData.append('image', data.image[0]);
        }
        
        instance
            .post('editMusic', formData)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
                // setMessage(err.response.data)
            })
    }

    return(
        <React.Fragment>
            <h3>Edit Album</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htrmlfor="name">
                    Enter an album name :
                    <input 
                        type="text"
                        name="name" 
                        defaultValue={album.name}
                        {...register("name")} 
                    />
                </label>
                <label htrmlfor="artistId">Choose an artist :
                    <select 
                        name="artistId" 
                        value={album.artist_id}
                        {...register("artistId")}
                    >
                        {
                            artists.map((value, index) => {
                                return <option key={index} value={value._id} >{value.name}</option>
                            })
                        }
                    </select>
                </label>
                <label htrmlfor="date">
                    Enter a date :
                    <input 
                        type="text" 
                        name="date" 
                        defaultValue={album.date}
                        {...register("date")} 
                    />
                </label>
                <label htrmlfor="style">
                    Enter a style :
                    <input 
                        type="text" 
                        name="style" 
                        defaultValue={album.style}
                        {...register("style")} 
                    />
                </label>
                <label htrmlfor="image">
                    Choose a picture :
                    <input 
                        type="file" 
                        name="image" 
                        defaultValue={album.image}
                        accept="image/png, image/jpeg" 
                        {...register("image")} 
                    />
                </label>
                <input type="submit" value="Update album" />
            </form>
            <div>
                <h4>Tracklist</h4>
                <table>
                    <thead>
                        <tr>
                            <th>order</th>
                            <th>name</th>
                            <th>artist</th>
                            <th>album</th>
                            <th>style</th>
                            <th>file</th>
                            <th>upload</th>
                        </tr>
                    </thead>
                </table>                    
                {
                    trackList.map((track, index) => {
                        return <EditFormTrack 
                            key={index}
                            track={track}
                            index={index+1}
                        />
                                
                    })
                }
            </div>
        </React.Fragment>
    )
}

export const EditFormTrack = (props) => {
    const {register, handleSubmit} = useForm();
    const {track, index} = props;
    const {_id, name, artist, album, style, file} = track;

        //Soumettre le formulaire
        const onSubmit = (data) => {
            console.log(data)
    
            const formData = new FormData();
            formData.append('collection', 'tracks');
            formData.append('id', _id);
    
            // Si la valeur n'a pas été changé on réattribut la valeur récupéré en BDD
            if(data.name === ''){
                formData.append('name', name);
            } else {
                formData.append('name', data.name);
            }
    
            if(data.artist === ''){
                formData.append('artist', artist);
            } else {
                formData.append('artist', data.artist);
            }
    
            if(data.album === ''){
                formData.append('album', album);
            } else {
                formData.append('album', data.album);
            }
    
            if(data.style === ''){
                formData.append('style', style);
            } else {
                formData.append('style', data.style);
            }
    
            if(data.file.length === 0){
                formData.append('file', file);
            } else {
                formData.append('file', data.file[0]);
            }
            
            instance
                .post('editMusic', formData)
                .then((res) => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.response.data)
                    // setMessage(err.response.data)
                })
        }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr key={index} tr_id={index}>
                            <td>{index}.</td>
                            <td>
                                <input 
                                    type="text"
                                    name="name" 
                                    defaultValue={name}
                                    {...register("name")} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    name="artist" 
                                    defaultValue={artist}
                                    {...register("artist")} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    name="album" 
                                    defaultValue={album}
                                    {...register("album")} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="style" 
                                    defaultValue={style}
                                    {...register("style")} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="file" 
                                    name="file" 
                                    accept="audio/*"
                                    {...register("file")} 
                                />
                            </td>
                            <td>
                                <input type="submit" value="Update track" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </React.Fragment>
    )
}