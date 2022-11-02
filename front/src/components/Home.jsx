import { Outlet } from "react-router-dom";
import { PlayerBar } from "./playerBar";
import { SearchResult } from "./searchResult";


export const Home = (props) => {

    return (
        <div>
            <h1>Awesome Music Librairy</h1>
            <Outlet />
            <PlayerBar />
        </div>
    )
}