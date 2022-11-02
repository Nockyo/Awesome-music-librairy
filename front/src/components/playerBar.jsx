import { useNavigate } from "react-router-dom"

export const PlayerBar = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("currentPlaylist");
    }

    return(
        <div>
            <p>PlayerBar</p>
            <button onClick={() => {handleClick()}}>Current playlist</button>
        </div>
    )
}