import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./GridCard.scss"
import { axiosInstance } from '../../config';

export default function GridCard({ movie }) {
    const [item, setItem] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axiosInstance.get(`/api/movies/find/` + movie, {
                });
                setItem(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie()
    }, [movie])
    return (
        <div className='gridCard'>
            <Link to={"/moviedetail"} state={{ movie: item }}>
                <img src={item.img} alt='' />
                <div className="titleContainer">
                    <h1> {item.title}</h1>
                </div>
            </Link>
        </div>
    )
}
