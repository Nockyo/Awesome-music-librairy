import { Player } from "../player/Player";

export const Album = (props) => {
    const {index, album} = props;
    const songsList = album.songsList;

    return (
        <div id={index}>
            <div className='albumContainer'>
                <img alt="" src={album.image} />
                    <svg viewBox='0 0 512 512' width='100' title='play-circle'><path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z' /></svg>
            </div>
            <Player />
            <ol className='songList'>
                {
                    songsList.map((value, index) => {
                        let indexSongList = index + 1;
                        return <li key={index}>{indexSongList}. {value.song}</li>
                    })
                }
            </ol>
            <p>{album.name}</p>
            <p>{album.artist}</p>
        </div>
    );
};