import React, { useState } from 'react'
import "./StarRating.scss"
import StarBorderIcon from '@mui/icons-material/StarRate';
import axios from 'axios';

export default function StarRating({ i, movie }) {
    const initialRating = i;
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);

    const handleClick = async (r) => {
        console.log(`http://localhost:4000/api/movies/${movie}/${rating}`)
        try {
            const res = await axios.put(`http://localhost:4000/api/movies/${movie}/${r}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='StarRating'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name='rating'
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                handleClick(ratingValue);
                            }}
                        />
                        <StarBorderIcon
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue < rating ? '#ffc107' : '#e4e5e9'} className={ratingValue <= (hover || rating) ? "starsPressed" : "starsUnpressed"} />
                    </label>)
            })}
        </div>
    )
}
