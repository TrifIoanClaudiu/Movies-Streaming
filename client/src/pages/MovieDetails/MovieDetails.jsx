import React, { useState, useEffect } from 'react'
import "./MovieDetails.scss"
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbeded'
import Carousel from "../../components/Carousel/Carousel"
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar'

export default function MovieDetails() {
    const trailer = "";


    return (
        <div className='movieDetails'>
            <NavBar />
            <div className="title">
                <h1>Movie Title</h1>
            </div>
            <div className="top">
                <div className="left">
                    <img src="https://www.wwe.com/f/styles/wwe_large/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg" alt="" />
                    <div className="rating">
                        ⭐⭐⭐⭐⭐ 4.5
                    </div>
                </div>
                <div className="right">
                    <YoutubeEmbed className='rightTrailer' embedId={trailer} useFor="Details" />
                    <div className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ad amet magnam non sed sunt ullam, omnis maxime expedita accusantium animi. Harum, corrupti! Non, molestiae perferendis. Dolores id cum rerum?
                    </div>
                </div>
            </div>

            <div className="carousel">
                {/* <Carousel key={item._id} genre="Drama" /> */}
            </div>

            <div className="comments">
            </div>

        </div>
    )
}
