import React, { useState } from "react";
import instance from "../../utils/instanceHttp";
import { useForm } from "react-hook-form";

export const SignUp = (props) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = (data) => {
        instance
            .post("/register", data)
            .then((res) => {
                setMessage(res.data);
            })
            .catch(err => {
                setMessage(err.response.data);
            })
    };

    return (
        <React.Fragment>
            <p>{message}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label htrmlfor="name">
                        Enter your name :
                        <input type="text" name="name" {...register("name", {required: true})} />
                    </label>
                    <label htrmlfor="email">
                        Enter your email :
                        <input type="email" name="email" {...register("email", {required: true})} />
                    </label>
                    <label htrmlfor="password">
                        Enter your password :
                        <input type="password" name="password" {...register("password", {required: true})} />
                    </label>
                    <label htrmlfor="passwordConfirm">
                        Enter your password :
                        <input type="password" name="passwordConfirm" {...register("passwordConfirm", {required: true})} />
                    </label>
                    <input type="submit" value="S'inscrire" />
                    {errors.exampleRequired && <span>This field is required</span>}
            </form>
        </React.Fragment>
    )
}