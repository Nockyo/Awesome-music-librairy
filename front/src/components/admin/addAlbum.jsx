import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import instance from "../../utils/instanceHttp";
import { FirstTrackInput, TrackInput } from "./trackInput";
const jsmediatags = window.jsmediatags;

// TODO ajouter les resets

export const AddAlbum = (props) => {
    const { register, handleSubmit, formState: { errors }, reset, getValues, setValue} = useForm({
        defaultValue:{
            name: '',
            artist: '',
            image: '',
            date: '',
            style: '',
            trackName: [],
            files: []
        }
    });
    const {setMessage} = props;
    const [artists, setArtists] = useState([]);
    const [trackListLength, setTrackListLength] = useState(1);

    const handleChange = (e) => {
        setTrackListLength(e.target.value);
    };

    useEffect(() => {
        instance
            .get('/getAllArtist')
            .then((res) => {
                setArtists(res.data);
            })
            .catch(err => {
                setMessage(err.response.data)
            })
    }, [])

    //Supprimer les données des input tracks quand on réduit leur nombre
    useEffect(() => {
        const filesArray = getValues('files');
        const trackNameArray = getValues('trackName');
        const newFilesArray = [];
        const newTrackNameArray = [];
        for(let i = 0; i < trackListLength; i++){
            newFilesArray.push(filesArray[i])
            newTrackNameArray.push(trackNameArray[i])
        }
        setValue('files', newFilesArray)
        setValue('trackName', newTrackNameArray)
    }, [trackListLength])

    const onSubmit = (data, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('artistId', data.artistId);
        formData.append('date', data.date);
        formData.append('style', data.style);
        formData.append('image', data.image[0]);
        for(let i = 0; i < trackListLength; i++){
            formData.append('tracksName', data.trackName[i]);
            formData.append('tracksFile', data.files[i][0])
        };
        
        instance
            .post('addAlbum', formData)
            .then((res) => {
                setMessage(res.data);
                reset();
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    //Récupérer les metadonnées de la première chanson pour compléter automatiquement les champs de l'album
    const handleTrackChange = (e) => {
        const file = e.target.files[0]
        
        jsmediatags.read(file, {
            onSuccess: (tag) => {
                if(tag.tags.album){
                    setValue('name', tag.tags.album)
                }

                if(tag.tags.artist){
                    instance
                        .post('/getArtistByName', {artistName : tag.tags.artist})
                        .then((res) => {
                            setValue('artistId', res.data._id)
                        })
                        .catch(err => {
                            console.log(err.response)
                        })
                }

                if(tag.tags.genre){
                    setValue('style', tag.tags.genre)
                }

                if(tag.tags.year){
                    setValue('date', tag.tags.year)
                }
                
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    return (
        <React.Fragment>
            <h3>Add Album</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Tracklist</h4>
                <p>Add an audio file first to get album datas</p>
                <label htrmlfor="trackListLength">
                    number of tracks :
                    <input 
                        type="number" 
                        name="trackListLength" 
                        min="1"
                        value={trackListLength} 
                        onChange={handleChange}
                    />
                </label>
                {
                    Array.from({ length: trackListLength }).map((input, index) => {
                        if(index === 0){
                            return <FirstTrackInput 
                                key={index.toString()} 
                                nbr={index} 
                                register={register} 
                                errors={errors} 
                                handleTrackChange={handleTrackChange}
                                setValue={setValue}
                            />
                        } else {
                            return <TrackInput 
                                key={index.toString()} 
                                nbr={index} 
                                register={register} 
                                errors={errors}
                                setValue={setValue}
                            />
                        }
                        
                    })
                }
                <h4>Album infos</h4>
                <label htrmlfor="name">
                    Enter an album name :
                    <input 
                        type="text"
                        name="name" 

                        {...register("name", {required: true})} 
                    />
                    {errors.name && <span>This field is required</span>}
                </label>
                <label htrmlfor="artistId">Choose an artist :
                    <select 
                        name="artistId"
                        {...register("artistId", {required: true})}
                    >
                        <option key={0} value="">-- Select an artist --</option>
                        {
                            artists.map((value, index) => {
                                return <option key={index+1} value={value._id}>{value.name}</option>
                            })
                        }
                    </select>
                    {errors.artistId && <span>This field is required</span>}
                </label>
                <label htrmlfor="date">
                    Enter a date :
                    <input 
                        type="text" 
                        name="date" 
                        {...register("date", {required: true})} 
                    />
                    {errors.date && <span>This field is required</span>}
                </label>
                <label htrmlfor="style">
                    Enter a style :
                    <input 
                        type="text" 
                        name="style" 
                        {...register("style", {required: true})} 
                    />
                    {errors.style && <span>This field is required</span>}
                </label>
                <label htrmlfor="image">
                    Choose a picture :
                    <input 
                        type="file" 
                        name="image" 
                        accept="image/png, image/jpeg" 
                        {...register("image", {required: true})}
                    />
                    {errors.image && <span>This field is required</span>}
                </label>
                <input type="submit" value="Ajouter" />
            </form>
        </React.Fragment>
    )
}