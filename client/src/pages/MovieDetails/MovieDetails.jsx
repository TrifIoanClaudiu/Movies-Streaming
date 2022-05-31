import React, { useState, useEffect, useLayoutEffect } from 'react'
import "./MovieDetails.scss"
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbeded'
import Carousel from "../../components/Carousel/Carousel"
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { updateByDirector } from '../../utils/apiCalls'
import { getItemValue, setItemValue } from '../../utils/localStorageUtils';

export default function MovieDetails() {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })
    const [loading, setLoading] = useState(false);
    const [Carousels, setCarousels] = useState([]);

    useEffect(() => {
        setLoading(true);
        if(getItemValue('reloadCount') < 2) {
            setItemValue('reloadCount', getItemValue('reloadCount')+1)
            window.location.reload();
          } else {
            setItemValue('reloadCount', 0);
          }
        updateByDirector(location.state.movie.director);
        const getCarousels = async () => {
            const genres = ["byDirector", "BestRated"];
            for (const genre of genres) {
                try {
                    const res = await axios.get(`http://localhost:4000/api/carousels/` + genre);
                    setCarousels(carouselsPrev => [...carouselsPrev, ...res.data]);
                } catch (err) {
                    console.log(err);
                }
            }
        }
        getCarousels();
        setLoading(false);
    },[location.state.movie.director], []);
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
                            ⭐⭐⭐⭐⭐ {location.state.movie.rating}
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
