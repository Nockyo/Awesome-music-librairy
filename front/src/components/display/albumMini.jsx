import React from "react"
import { useNavigate } from "react-router-dom";

export const AlbumMini = (props) => {
    const {album} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/album', {state : {album : album}})
    }
    
    return (
        <div className="albumMini" onClick={() => {handleClick()}}>
            <img src={album.image} alt={album.artist} style={{width: 100+'px'}}/>
            <p>{album.name}</p>
            <p>{album.artist}</p>
            <p>album</p>
        </div>
    )
}