import React, { useEffect } from "react"
import { useState } from "react";
import { useLocation } from "react-router-dom"
import instance from "../../utils/instanceHttp";
import { AlbumMini } from "./albumMini";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Artist = (props) => {
    const {state} = useLocation();
    const {artist} = state;
    const {
        currentPlaylist, 
        setCurrentPlaylist, 
        setCurrentTrackId,
    } = props;
    const [discography, setDiscography] = useState([]);

    useEffect(() => {
        instance
            .post("/getArtistAlbums", {artistId: artist._id})
            .then((res) => {
                setDiscography(res.data)
            })
            .catch((err) => {
                console.log(err.reponse)
            })
    }, [artist])

    //Gestion lecture musique
    const listenArtist = (discography) => {
        const newCurrentPlaylist = [];
        discography.forEach((album) => {
            album.tracks.forEach((track) => {
                newCurrentPlaylist.push(track.id)
            })
        })
        setCurrentPlaylist(newCurrentPlaylist)
        setCurrentTrackId(newCurrentPlaylist[0])
    }

    const addArtistToCurrentPlaylist = (discography) => {
        const newCurrentPlaylist = currentPlaylist;
        discography.forEach((album) => {
            album.tracks.forEach((track) => {
                newCurrentPlaylist.push(track.id)
            })
        })
        setCurrentPlaylist(newCurrentPlaylist)
    }
    
    return (
        <div className="artist container">
            <div className="infos">
                <img src={artist.image} alt={artist.name} style={{width: 100+'px'}} />
                <p>{artist.name}</p>
                <p>{artist.biography}</p>
                <p>{artist.style}</p>
                <div className="buttons">
                    <button onClick={() => {listenArtist(discography)}}>Listen</button>
                    <button onClick={() => {addArtistToCurrentPlaylist(discography)}} >Ad next</button>
                </div>
            </div>
            <div className="discography">
                {discography.length > 0 && 
                    <div>
                        <h2>Discography</h2>
                        <Swiper
                            slidesPerView={2.3}
                            spaceBetween={15}
                            breakpoints={{
                                1024: {
                                  slidesPerView: 6.5,
                                },
                              }}
                        >
                        {discography.map((album, index) => {
                            return <SwiperSlide key={index}><AlbumMini 
                                album={album}
                            /></SwiperSlide>
                        })}
                        </Swiper>  
                    </div>
                }
            </div>
        </div>
    )
}

//image
//name