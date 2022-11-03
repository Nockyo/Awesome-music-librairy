import { ArtistMini } from "./display/artistMini"
import { AlbumMini } from "./display/albumMini"
import { TrackMini } from "./display/trackMini"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";

export const SearchResult = (props) => {
    const {
        artists,
        albums,
        tracks,
        setCurrentPlaylist,
        currentPlaylist,
        setCurrentTrackId
    } = props

    return(
        <div className="searchResult container">
            <h2>Results</h2>
            {artists.length > 0 && 
                <React.Fragment>
                    <h3>Artists</h3>
                    <Swiper
                        slidesPerView={2.3}
                        spaceBetween={15}
                        breakpoints={{
                            1024: {
                              slidesPerView: 6.5,
                            },
                          }}
                    >
                    {
                        artists.map((artist, index) => {
                            return <SwiperSlide key={index}><ArtistMini 
                                artist={artist}
                            /></SwiperSlide>
                        })
                    }
                    </Swiper>
                </React.Fragment>
            }
            {albums.length > 0 && 
                <React.Fragment>
                    <h3>Albums</h3>
                    <Swiper
                        slidesPerView={2.3}
                        spaceBetween={15}
                        breakpoints={{
                            1024: {
                              slidesPerView: 6.5,
                            },
                          }}
                    >
                    {
                        albums.map((album, index) => {
                            return <SwiperSlide key={index}><AlbumMini 
                                album={album}
                            /></SwiperSlide>
                        })
                    }
                    </Swiper>
                </React.Fragment>
            }
            {tracks.length > 0 && 
                <React.Fragment>
                    <h3>Tracks</h3>
                    <Swiper
                        slidesPerView={2.3}
                        spaceBetween={15}
                        breakpoints={{
                            1024: {
                              slidesPerView: 6.5,
                            },
                          }}
                    >
                    {
                        tracks.map((track, index) => {
                            return <SwiperSlide key={index}><TrackMini 
                                track={track}
                                setCurrentPlaylist={setCurrentPlaylist}
                                currentPlaylist={currentPlaylist}
                                setCurrentTrackId={setCurrentTrackId}
                            /></SwiperSlide>
                        })
                    }
                    </Swiper>
                </React.Fragment>
            }
        </div>
    )
}