import React, { useState, useEffect, useLayoutEffect } from 'react'
import "./MovieDetails.scss"
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbeded'
import Carousel from "../../components/Carousel/Carousel"
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { updateByDirector } from '../../utils/apiCalls'
import { refreshPage } from '../../utils/localStorageUtils';
import StarRating from '../../components/StarRating/StarRating'
import { axiosInstance } from '../../config'

export default function MovieDetails() {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })
    const [loading, setLoading] = useState(false);
    const [Carousels, setCarousels] = useState([]);

    useEffect(() => {
        setLoading(true);
        refreshPage();
        updateByDirector(location.state.movie.director);
        const getCarousels = async () => {
            const genres = ["byDirector", "BestRated"];
            for (const genre of genres) {
                try {
                    const res = await axiosInstance.get(`/api/carousels/` + genre);
                    setCarousels(carouselsPrev => [...carouselsPrev, ...res.data]);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        getCarousels();
        setLoading(false);
    }, [location.state.movie.director], []);
    return (
        <div className='movieDetails'>
            <NavBar />
            <div className="title">
                <h1>{location.state.movie.title}</h1>
            </div>
            <div className="top">
                <div className="left">
                    <img src={location.state.movie.img} alt="" />
                    <div className="leftInfo">
                        <div className="rating">
                            <StarRating i = {Math.round(location.state.movie.rating)} movie = {location.state.movie._id}/>
                            <div className="ratingScore">
                                {location.state.movie.rating.toFixed(1)}
                            </div>
                        </div>
                        <div className="director">
                            Director: {location.state.movie.director}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <YoutubeEmbed className='rightTrailer' embedId={location.state.movie.trailer} useFor="Details" />
                    <div className="desc">
                        {location.state.movie.desc}
                    </div>
                </div>
            </div>

            <div className="carousel">
                {!loading && Carousels.map((carousel) => (
                    <Carousel key={carousel._id} carousel={carousel} />
                ))}
            </div>
            <Footer />
        </div>
    )
}
