import { useEffect } from "react"
import { SearchResultArtist } from "./searchResult/searchResultArtist"
import { SearchResultAlbum } from "./searchResult/searchResultAlbum"
import { SearchResultTrack } from "./searchResult/searchResultTrack"
import { SearchResultPlaylist } from "./searchResult/searchResultPlaylist"

export const Home = (props) => {
    const {
        artists,
        albums,
        tracks,
        usersPlaylists,
        searchBar,
    } = props

    useEffect(() => {
        console.log(artists);
        console.log(albums);
        console.log(tracks);
        console.log(usersPlaylists);
    },[searchBar])

    return (
        <div>
            <h1>Awesome Music Librairy</h1>
            {
                searchBar && <div className="searchResult">
                    {artists && <SearchResultArtist results={artists} />}
                    {albums && <SearchResultAlbum results={albums} />}
                    {tracks && <SearchResultTrack results={tracks} />}
                    {usersPlaylists && <SearchResultPlaylist results={usersPlaylists} />}
                </div>
            }
        </div>
    )
}