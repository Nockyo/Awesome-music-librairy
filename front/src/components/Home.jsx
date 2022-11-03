import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import instance from "../utils/instanceHttp";
import { AlbumMini } from "./display/albumMini";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Home = (props) => {
    const [albumsNew, setAlbums] = useState([]);
    const [albumsNuMetal, setAlbumsNuMetal] = useState([]);
    const [albumsTripHop, setAlbumsTripHop] = useState([]);
    const {isConnected} = props;
    
    useEffect(() => {
        if(isConnected){
            instance
            .get("/getAllAlbumByUploadedDate")
            .then((res) => {
                setAlbums(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })

        instance
            .post("/getAllAlbumByStyle", {style : 'Nu Metal'})
            .then((res) => {
                setAlbumsNuMetal(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })

        instance
            .post("/getAllAlbumByStyle", {style : 'Trip-Hop'})
            .then((res) => {
                setAlbumsTripHop(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }{
            setAlbums([])
            setAlbumsNuMetal([])
            setAlbumsTripHop([])
        }
    }, [isConnected])

    return (
        <div className="container">
            <h1>Awesome Music Librairy</h1>
            {
                albumsNew.length > 0 &&   
                    <div>
                        <h2>News</h2>
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
                            albumsNew.map((album, index) => {
                                return  <SwiperSlide key={index} ><AlbumMini album={album} /></SwiperSlide>
                            })
                        }
                        </Swiper>
                    </div>
            }
            {
                albumsNuMetal.length > 0 &&   
                    <div>
                        <h2>Nu Metal</h2>
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
                            albumsNuMetal.map((album, index) => {
                                return  <SwiperSlide key={index}><AlbumMini album={album} /></SwiperSlide>
                            })
                        }
                        </Swiper>  
                    </div>
            }
            {
                albumsTripHop.length > 0 &&   
                    <div>
                        <h2>Trip-Hop</h2>
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
                            albumsTripHop.map((album, index) => {
                                return  <SwiperSlide key={index}><AlbumMini album={album} /></SwiperSlide>
                            })
                        }
                        </Swiper>  
                    </div>
            }
            <Outlet />
        </div>
    )
}