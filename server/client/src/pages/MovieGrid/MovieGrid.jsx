import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import GridCard from "../../components/GridCard/GridCard";
import "./MovieGrid.scss"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from "../../config";

export default function MovieGrid() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            try {
                const result = await axiosInstance.get(`/api/movies/search/` + name);
                setMovies(result);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchMovies();
    }, [name])
    return (
        <div className="grid">
            <NavBar />
            <div className="search">
                <input
                    type="text"
                    value={name}
                    placeholder="Search"
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
            </div>
            <div className="movies">
                {!isLoading && movies.data.map((movie) => (
                    <GridCard key={movie._id} movie={movie} />
                ))}
            </div>
            <Footer />
        </div>
    )
}
