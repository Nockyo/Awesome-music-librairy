import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../../utils/instanceHttp";

export const EditArtist = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {setMessage, search} = props;
    const [artists, setArtists] = useState([]);

    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        instance
            .get('/getAllArtist')
            .then((res) => {
                console.log(res.data)
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
        console.log(e.target)
    }

    return(
        <React.Fragment>
            <h3>Edit Artist</h3>
            <table>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>biography</th>
                        <th>style</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map((artist, index) => {                       
                        return <tr key={artist._id} tr_id={artist._id}>
                            <td><img src={artist.image} alt={artist.name} style={{width: 100 + 'px'}}></img></td>
                            <td>{artist.name}</td>
                            <td>{artist.biography}</td>
                            <td>{artist.style}</td>
                            <td>
                                <span
                                    className="material-symbols-outlined"
                                    onClick={() => {console.log('edit')}}
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
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label htrmlfor="name">
                    Enter an artist name :
                    <input type="text" name="name" {...register("name", {required: true})} />
                    {errors.name && <span className="errors">This field is required</span>}
                </label>
                <label htrmlfor="biography">
                    Enter a biography <span>(100 letterings minimum) </span> :
                    <textarea name="biography" rows="5" cols="33" {...register("biography", {required: true})} ></textarea>
                    {errors.biography && <span className="errors">This field is required</span>}
                </label>
                <label htrmlfor="style">
                    Enter a style :
                    <input type="text" name="style" {...register("style", {required: true})} />
                    {errors.style && <span className="errors">This field is required</span>}
                </label>
                <label htrmlfor="image">
                    Choose a picture:
                    <input type="file" name="image" accept="image/png, image/jpeg" {...register("image", {required: true})} />
                    {errors.image && <span className="errors">This field is required</span>}
                </label>
                <input type="submit" value="Ajouter" />
            </form> */}
        </React.Fragment>
    )
}