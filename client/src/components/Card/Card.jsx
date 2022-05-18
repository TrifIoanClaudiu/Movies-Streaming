import React, { useState, useEffect } from 'react'
import "../YoutubeEmbed/YoutubeEmbeded"
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbeded';
import "./Card.scss";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Card({ index, movie }) {
    const [isHovered, setIsHovered] = useState(false);
    const [item, setItem] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/movies/find/` + movie, {
                });
                setItem(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie()
    }, [movie])
    return (
        <div className='card'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}>
            {isHovered ? (
                <>
                    <YoutubeEmbed embedId={item.trailer} useFor="Card" />
                    <Link to={"/moviedetail"} state={{ movie:item }}>
                        <div className="cardInfo">
                            <span>{item.duration}</span>
                            <span className='rating'>{item.rating}⭐</span>
                            <span>{item.year}</span>

                        </div>
                        <div className="desc">
                            {item.desc}
                        </div>
                        <div className="genre">
                            {item.genre}
                        </div>
                    </Link>
                </>
            ) : <img src={item.img}
                alt="" />}
        </div>
    )
}
