import { Outlet } from "react-router-dom";
import { PlayerBar } from "./playerBar";

export const Home = (props) => {
    const {
        currentPlaylist, 
        setCurrentPlaylist,
        currentTrackId,
        setCurrentTrackId,
    } = props;

    return (
        <div>
            <h1>Awesome Music Librairy</h1>
            <Outlet />
            <PlayerBar 
                currentPlaylist={currentPlaylist} 
                setCurrentPlaylist={setCurrentPlaylist}
                currentTrackId={currentTrackId}
                setCurrentTrackId={setCurrentTrackId}
            />
        </div>
    )
}