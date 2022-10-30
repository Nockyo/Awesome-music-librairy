import React from "react";

export const TrackInput = (props) => {
    const {nbr, register} = props;
    const name = `trackName[${nbr}]`;
    const duration = `duration[${nbr}]`;
    const file = `files[${nbr}]`;

    return(
        <div>
            <label htrmlfor={name}>
                Enter a name :
                <input type="text" name={name} {...register(name, {required: true})} />
            </label>
            <label htrmlfor={duration}>
                Enter a duration :
                <input type="text" name={duration} {...register(duration, {required: true})} />
            </label>
            <label htrmlfor={file}>
                Choose a track:
                <input type="file" name={file} accept="audio/*" {...register(file, {required: true})} />
            </label>
        </div>
    )
}