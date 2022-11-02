import React from "react"
import { useNavigate } from "react-router-dom";

export const ArtistMini = (props) => {
    const {artist} = props;
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/artist', {state : {artist : artist}})
    }

    return (
        <div className="artistMini" onClick={() => {handleClick()}}>
            <img src={artist.image} alt={artist.name} style={{width: 100+'px'}} />
            <p>{artist.name}</p>
            <p>artiste</p>
        </div>
    )
}