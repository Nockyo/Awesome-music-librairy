import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import instance from "../../utils/instanceHttp";
import { TrackInput } from "./trackInput";

// TODO ajouter les resets

export const AddAlbum = (props) => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const {setMessage} = props;
    const [artists, setArtists] = useState([]);
    const [trackListLength, setTrackListLength] = useState(0);

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

    const onSubmit = (data) => {
        console.log(data.files)
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('artistId', data.artistId);
        formData.append('date', data.date);
        formData.append('style', data.style);
        formData.append('image', data.image[0]);
        for(let i = 0; i < trackListLength; i++){
            formData.append('tracksName', data.trackName[i]);
            formData.append('tracksDuration', data.duration[i]);
            formData.append('tracksFile', data.files[i][0])
        };
        
        // instance
        //     .post('addAlbum', formData)
        //     .then((res) => {
        //         setMessage(res.data);
        //         // reset()
        //     })
        //     .catch(err => {
        //         console.log(err.response)
        //     })
        //     // reset()
    }

    return (
        <React.Fragment>
            <h3>Add Album</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <h4>Add Tracks</h4>
                <label htrmlfor="trackListLength">
                    number of tracks :
                    <input 
                        type="number" 
                        name="trackListLength" 
                        value={trackListLength} 
                        onChange={handleChange}
                    />
                </label>
                {
                    Array.from({ length: trackListLength }).map((input, index) => <TrackInput key={index.toString()} nbr={index} register={register} errors={errors} required />)
                }
                <input type="submit" value="Ajouter" />
            </form>
        </React.Fragment>
    )
}