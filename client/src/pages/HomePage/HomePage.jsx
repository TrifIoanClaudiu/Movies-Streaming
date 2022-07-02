import React, { useEffect, useState, useContext } from 'react';
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import HeroCard from "../../components/HeroCard/HeroCard";
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import axios from "axios";
import {UpdateAll} from "../../utils/apiCalls"
import { AuthContext } from '../../utils/authContext/AuthContext';
import { Navigate } from 'react-router-dom';
import { stopScrolling } from '../../utils/localStorageUtils';
import { refreshPage } from '../../utils/localStorageUtils';

function HomePage() {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [Carousels, setCarousels] = useState([]);
    stopScrolling(false);
    useEffect(() => {
        UpdateAll();
        refreshPage();
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
    if (user !== null){
    return (
        <div className='Home'>
            <NavBar />
            <HeroCard />
            {!loading && Carousels.map((carousel) => (
                <Carousel key={carousel._id} carousel={carousel} />
            ))}
            <Footer />
        </div>
    );}else{
        return <Navigate to="/login" />
    }
}

export default HomePage;