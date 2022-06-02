import React, { useState } from 'react'
import "./StarRating.scss"
import StarBorderIcon from '@mui/icons-material/StarRate';


export default function StarRating({i}) {
    const initialRating = i;
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);
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
                            onClick={() => setRating(ratingValue)}
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
