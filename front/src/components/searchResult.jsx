import { ArtistMini } from "./display/artistMini"
import { AlbumMini } from "./display/albumMini"
import { TrackMini } from "./display/trackMini"

export const SearchResult = (props) => {
    const {
        artists,
        albums,
        tracks,
        setCurrentPlaylist,
        currentPlaylist
    } = props

    return(
        <div className="searchResult">
            <p>Results</p>
            {artists.length > 0 && artists.map((artist, index) => {
                return <ArtistMini 
                    key={index}
                    artist={artist}
                />
            })}
            {albums.length > 0 && albums.map((album, index) => {
                return <AlbumMini 
                    key={index}
                    album={album}
                />
            })}
            {tracks.length > 0 && tracks.map((track, index) => {
                return <TrackMini 
                    key={index}
                    track={track}
                    setCurrentPlaylist={setCurrentPlaylist}
                    currentPlaylist={currentPlaylist}
                />
            })}
        </div>
    )
}