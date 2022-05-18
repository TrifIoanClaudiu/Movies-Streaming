import React, { useState, useEffect , useLayoutEffect } from 'react'
import "./MovieDetails.scss"
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbeded'
import Carousel from "../../components/Carousel/Carousel"
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { useLocation} from 'react-router-dom'

export default function MovieDetails() {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })
    const [loading, setLoading] = useState(false);
    const [Carousels, setCarousels] = useState([]);
    useEffect(() => {
        setLoading(true);
        const getCarousels = async () => {
            const genres = ["BestRated"];
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
    }, []);
    return (
        <div className='movieDetails'>
            <NavBar />
            <div className="title">
                <h1>{location.state.movie.title}</h1>
            </div>
            <div className="top">
                <div className="left">
                    <img src={location.state.movie.img} alt="" />
                    <div className="rating">
                        ⭐⭐⭐⭐⭐ {location.state.movie.rating}
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
            <div className="comments">
            </div>
            <Footer />
        </div>
    )
}
