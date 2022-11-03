import React from "react";
import { useForm } from "react-hook-form";
import instance from "../../utils/instanceHttp";

export const AddArtist = (props) => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const {setMessage} = props;

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('biography', data.biography);
        formData.append('style', data.style);
        formData.append('image', data.image[0]);
        
        await instance
            .post('addArtist', formData)
            .then((res) => {
                setMessage(res.data);
                reset()
            })
            .catch(err => {
                setMessage(err.response.data)
            })
    }

    return (
        <React.Fragment>
            <h3>Add Artist</h3>
            <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <label htrmlfor="name">
                    Enter an artist name :
                    <input 
                        type="text" 
                        name="name" 
                        {...register("name", {required: true})}
                    />
                    {errors.name && <span className="errors">This field is required</span>}
                </label>
                <label htrmlfor="biography">
                    Enter a biography (100 letterings minimum) :
                    <textarea 
                        name="biography" 
                        rows="5" 
                        cols="33" 
                        {...register("biography", {required: true})} 
                    />
                    {errors.biography && <span className="errors">This field is required</span>}
                </label>
                <label htrmlfor="style">
                    Enter a style :
                    <input 
                        type="text" 
                        name="style" 
                        {...register("style", {required: true})} 
                    />
                    {errors.style && <span className="errors">This field is required</span>}
                </label>
                <label htrmlfor="image">
                    Choose a picture:
                    <input 
                        type="file" 
                        name="image" 
                        accept="image/png, image/jpeg" 
                        {...register("image", {required: true})} 
                    />
                    {errors.image && <span className="errors">This field is required</span>}
                </label>
                <input type="submit" value="Ajouter" />
            </form>
        </React.Fragment>
    )
}