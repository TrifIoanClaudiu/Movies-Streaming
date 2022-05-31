import React, { useEffect, useState } from 'react'
import "./GridCard.scss"
import axios from 'axios'

export default function GridCard({ movie }) {
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
        <div className='gridCard'>
            <img src={item.img} alt='' />
            <div className="titleContainer">
                <h1> {item.title}</h1>
            </div>
        </div>
    )
}
