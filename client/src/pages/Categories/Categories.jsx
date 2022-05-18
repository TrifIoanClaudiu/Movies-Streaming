import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import "./Categories.scss"
import axios from 'axios';

export default function Categories() {
    const [loading, setLoading] = useState(false);
    const [Carousels, setCarousels] = useState([]);
    useEffect(() => {
        setLoading(true);
        const getCarousels = async () => {
            const genres = ["Drama", "Thriller", "Western", "Romance"];
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
        <div className="Categories">
            <NavBar />
            <div className="Carousels">

                {!loading && Carousels.map((carousel) => (
                    <Carousel key={carousel._id} carousel={carousel} />
                ))}
            </div>
            <Footer />
        </div>
    )
}
