import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../utils/instanceHttp";
import { useForm } from "react-hook-form";

export const SignIn = (props) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const setIsConnected = props.setIsConnected;
    const [message, setMessage] = useState('');

    const onSubmit = (data) => {
        instance
            .post('/login', data)
            .then((res) => {
                localStorage.setItem('jwt', res.data.jwt);
                instance.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
                setIsConnected(true)
                navigate("/");
            })
            .catch(err => {
                setMessage(err.response.data)
            })
    };

    return (
        <React.Fragment>
            <p>{message}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htrmlfor="email">
                    Enter your email:
                    <input type="email" name="email" {...register("email", {required: true})} />
                    {errors.email && <span>This field is required</span>}
                </label>
                <label htrmlfor="password">
                    Enter your password:
                    <input type="password" name="password" {...register("password", {required: true})} />
                    {errors.password && <span>This field is required</span>}
                </label>
                <input type="submit" value="Connexion" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
            <button onClick={() => {navigate("/signUp")}}>Pas encore de compte ? Inscrivez-vous !</button>
        </React.Fragment>
    )
}