import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import instance from "../utils/instanceHttp";
import { secondsToMinutes, shuffle } from "../utils/utils";

// ! Ne pas oublier de modifier la currentPlaylist au fur et à mesure

export const PlayerBar = (props) => {
    const navigate = useNavigate();
    const {
        currentPlaylist,
        setCurrentPlaylist,
        currentTrackId,
        setCurrentTrackId
    } = props;
    const AUDIO = document.querySelector('#audio');
    const [imageAlbum, setImageAlbum] = useState('');
    const [currentTrack, setCurrentTrack] = useState({});
    const [repeat, setRepeat] = useState(false);
    const [random, setRandom] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [volume, setVolume] = useState(true);
    const [duration, setDuration] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [saveCurrentPlaylist, setSaveCurrentPlaylist] = useState([]);

    const handleClick = () => {
        navigate("currentPlaylist");
    }
    
    useEffect(() => {
        if(currentTrackId){
            instance
                .post('/getTrack', {trackId : currentTrackId})
                .then((res) => {
                    //Récupérer les infos sur une track
                    setCurrentTrack(res.data)
                    //Reset currentTrackId
                    setCurrentTrackId('')

                    //Récupérer la pochette de l'album
                    const formData = new FormData();
                    formData.append('trackId', res.data._id);
                    formData.append('albumName', res.data.album);
                    instance
                        .post("/getAlbumImageFromTrackId", formData)
                        .then((res) => {
                            setImageAlbum(res.data.image);
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
    }, [currentTrackId])

    // Dépendance currentTrack
    useEffect(() => {
        if(Object.keys(currentTrack).length > 0){
            //Changer le src de l'audio
            AUDIO.src = currentTrack.file;
            if(AUDIO.src !== ""){
                //Au chargement des metadas, modifier duration, currentDuration et lancer la track
                AUDIO.addEventListener('loadedmetadata', () => {
                    setDuration(secondsToMinutes(AUDIO.duration))
                    setCurrentTime('00:00')
                    onClickPlay()
                });
            }
        }
    }, [currentTrack])

    //Gestion passage automatique à la musique suivante
    useEffect(() => {
        if(isPlayed){
            AUDIO.addEventListener('timeupdate', () => {
                timerprogress()
            });
            AUDIO.addEventListener('timeupdate', () => {
                updateCurrentDuration()
            });
        }

    })

    //Gestion de la barre de progression du morceau et passage au morceau suivant
    const timerprogress = () => {
        let percent = (AUDIO.currentTime / AUDIO.duration) * 100;
        document.querySelector('.currentDurationBar').style.width = percent+"%";
        if (percent === 100) {
            onClickNext();
        };
    };

    //Actualise le temps d'avancée du morceau
    const updateCurrentDuration = () => {
        setCurrentTime(secondsToMinutes(AUDIO.currentTime))
    }

    // Gestion Random
    useEffect(() => {
        if(currentPlaylist.length === 0){
            setCurrentTrack({})
        }
    }, [currentPlaylist])

    const onClickPlay = () => {
        AUDIO.play();
        setIsPlayed(true);
    }

    const onClickPause = () => {
        AUDIO.pause();
        setIsPlayed(false)
    }

    const onClickPrev = () => {
        // Si audio suffisamment avancé, revenir au début de la track
        if(AUDIO.currentTime > 1){
            AUDIO.currentTime = 0
        } else {
            let index = getCurrentTrackIndex()
            if(index > 0){
                setCurrentTrackId(currentPlaylist[index - 1])
            } else if (index === 0 && repeat){
                setCurrentTrackId(currentPlaylist[currentPlaylist.length - 1])
            }
        }
    }

    const onClickNext = () => {
        //Récupérer l'index la currentTrack
        let index = getCurrentTrackIndex()
        //Puis le réutiliser pour récupérer le trackId de la prochaine chanson
        if(index < currentPlaylist.length - 1){
            setCurrentTrackId(currentPlaylist[index + 1])
        } else if (index === currentPlaylist.length - 1 && repeat){
            setCurrentTrackId(currentPlaylist[0])
        }
    }

    //Gestion volume
    const onClickVolume = () => {
        setVolume(!volume)
        AUDIO.muted = !AUDIO.muted;
    }

    //Fonction générales
    const getCurrentTrackIndex = () => {
        let currentTrackIndex = 0;
        currentPlaylist.forEach((track, index) => {
            if(track === currentTrack._id){
                currentTrackIndex = index;
            }
        })
        return currentTrackIndex
    }

    useEffect(() => {
        if(random){
            if(currentPlaylist.length > 0){
                setSaveCurrentPlaylist(currentPlaylist);

                //Récupérer la track en court de lecture puis concaténer avec la shuffled Playlist
                let indexTrack = getCurrentTrackIndex();
                let shuffledArray = [currentPlaylist[indexTrack]].concat(shuffle(currentPlaylist.slice(1)));
                setCurrentPlaylist(shuffledArray);
            }
        } else {
            if(currentPlaylist.length > 0 && saveCurrentPlaylist.length > 0) {
                setCurrentPlaylist(saveCurrentPlaylist);
            }
        }
    }, [random])

    return(
        <div>
            <p>Player Bar</p>
            <button onClick={() => {handleClick()}}>Current Playlist</button>
            {
                Object.keys(currentTrack).length > 0 &&
                    <React.Fragment>
                        <button onClick={() => {onClickPrev()}}>Prev</button>
                        <button onClick={() => {onClickPlay()}}>Play</button>
                        <button onClick={() => {onClickPause()}}>Pause</button>
                        <button onClick={() => {onClickNext()}}>Next</button>
                        <button onClick={() => {setRepeat(!repeat)}}>Repeat</button>
                        <button onClick={() => {setRandom(!random)}}>Random</button>
                        <button onClick={() => {onClickVolume()}}>Mute</button>
                        <div className="trackInfos">
                            <img src={imageAlbum} alt={currentTrack.album} style={{width: 100+'px'}} />
                            <p>{currentTrack.name}</p>
                            <p>{currentTrack.artist}</p>
                            <p>{currentTrack.album}</p>
                            <p>{currentTime}</p>
                            <p>{duration}</p>
                            <span className="durationBar" style={{width: 100+'px', height:10+'px', border: 'solid 1px black', display: 'block'}}>
                                <span className="currentDurationBar" style={{height:10+'px', backgroundColor: 'red', display: 'inline-block'}}></span>
                            </span>
                            
                        </div>
                    </React.Fragment>
            }
            <audio id="audio" preload="metadata">
                <source src="" type="audio/*" data-trackid="1"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}