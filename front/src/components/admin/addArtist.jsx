import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const AddArtist = (props) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [name, setName] = useState('');
    const [biography, setBiography] = useState('');
    const [style, setStyle] = useState('');
    const [image, setImage] = useState(null);

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onBiographyChange = (e) => {
        setBiography(e.target.value);
    }

    const onStyleChange = (e) => {
        setStyle(e.target.value);
    }

    const onImageChange = (e) => {
        // console.log(e.target.files[0])
        setImage(e.target.files[0]);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newArtist = {
    //         name: name,
    //         biography: biography,
    //         styles: style,
    //         image: image,
    //     }

    //     let formData = new FormData();

    //     formData.append(
    //         "name", name
    //     );

    //     console.log(formData)

    // }

    const onSubmit = data => console.log(data);

    // const onSubmit = async (data) => {
    //     const formData = new FormData();

    //     const res = await fetch("/admin/addArtist", {
    //         method: "POST",
    //         body: formData,
    //     }).then((res) => res.json());

    //     alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    // };

    return (
        <React.Fragment>
            <h3>Add Artist</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htrmlfor="name">
                    Enter an artist name :
                    <input type="text" name="name" {...register("name", {required: true})} />
                </label>
                <label htrmlfor="biography">
                    Enter a biography <span>(100 letterings minimum) </span> :
                    <textarea name="biography" rows="5" cols="33" {...register("biography", {required: true})} ></textarea>
                </label>
                <label htrmlfor="style">
                    Enter a style :
                    <input type="text" name="style" {...register("styles", {required: true})} />
                </label>
                <label htrmlfor="image">
                    Choose a picture:
                    <input type="file" name="image" accept="image/png, image/jpeg" {...register("image", {required: true})} />
                </label>
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Ajouter" />
            </form>
        </React.Fragment>
    )
}