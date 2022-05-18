import './HeroCard.scss';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function HeroCard() {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get(`http://localhost:4000/api/movies/random`, {
				});
				setMovie(res.data[0]);
			} catch (err) {
				console.log(err);
			}
		}
		getMovie()
	},[])

	return (
		<div
			className="hero-container"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${movie.img})`,
				backgroundPosition: 'center center',
			}}
		>
			<h1>{movie.title}</h1>
			<p className="movie-description">{movie.desc}</p>
			<div className="hero-btns">

				<Link to={"/moviedetail"} state={{ movie:movie }} className="navigation-btns" id="more-info-btn">
					More Info
				</Link>
			</div>
		</div>
	);
}
export default HeroCard;