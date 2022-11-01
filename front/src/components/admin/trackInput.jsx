import React from "react";
const jsmediatags = window.jsmediatags;

export const FirstTrackInput = (props) => {
    const {
        nbr, 
        register, 
        errors, 
        handleTrackChange,
        setValue
    } = props;
    const name = `trackName[${nbr}]`;
    const file = `files[${nbr}]`;
    
    //Récupérer les metadonnées de la première chanson pour compléter automatiquement le champ name de la track
    const handleTrackNameChange = (e) => {
        const file = e.target.files[0]
        
        jsmediatags.read(file, {
            onSuccess: (tag) => {
                setValue(name, tag.tags.title)
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    return(
        <div>
            <label htrmlfor={name}>
                Enter a name :
                <input 
                    type="text" 
                    name={name}
                    {...register(name, {required: true})} 
                />
                {errors.name && <span>This field is required</span>}
            </label>
            <label htrmlfor={file}>
                Choose a track:
                <input 
                    type="file" 
                    name={file} 
                    accept="audio/mp3, audio/mp4, audio/m4a" {...register(file, {required: true})} 
                    onChange={(e) => {handleTrackChange(e); handleTrackNameChange(e)}}
                />
                {errors.file && <span>This field is required</span>}
            </label>
        </div>
    )
}

export const TrackInput = (props) => {
    const {
        nbr, 
        register, 
        errors,
        setValue
    } = props;
    const name = `trackName[${nbr}]`;
    const file = `files[${nbr}]`;
    
    //Récupérer les metadonnées de la première chanson pour compléter automatiquement le champ name de la track
    const handleTrackNameChange = (e) => {
        const file = e.target.files[0]

        jsmediatags.read(file, {
            onSuccess: (tag) => {
                setValue(name, tag.tags.title)
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    return(
        <div>
            <label htrmlfor={name}>
                Enter a name :
                <input 
                    type="text" 
                    name={name}
                    {...register(name, {required: true})} 
                />
                {errors.name && <span>This field is required</span>}
            </label>
            <label htrmlfor={file}>
                Choose a track:
                <input 
                    type="file" 
                    name={file} 
                    accept="audio/mp3, audio/mp4, audio/m4a" {...register(file, {required: true})} 
                    onChange={handleTrackNameChange}
                />
                {errors.file && <span>This field is required</span>}
            </label>
        </div>
    )
}