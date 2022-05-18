import React, { useEffect, useState } from 'react';
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import HeroCard from "../../components/HeroCard/HeroCard";
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import axios from "axios";
import {UpdateAll} from "../../utils/apiCalls"

function HomePage() {
    const [loading, setLoading] = useState(false);
    const [Carousels, setCarousels] = useState([]);
    useEffect(() => {
        UpdateAll();
        setLoading(true);
        const getCarousels = async () => {
            const genres = ["BestRated", "Newest", "Golden"];
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
        <div className='Home'>
            <NavBar />
            <HeroCard />
            {!loading && Carousels.map((carousel) => (
                <Carousel key={carousel._id} carousel={carousel} />
            ))}
            <Footer />
        </div>
    );
}

export default HomePage;