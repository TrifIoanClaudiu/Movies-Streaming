import React, { useRef, useState } from 'react'
import "./Carousel.scss";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Card from '../Card/Card';

export default function Carousel({ carousel }) {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);


    const carouselRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = carouselRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            carouselRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            carouselRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className='carousel'>
            <span className="listTitle"> {carousel.title} </span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className='sliderArrow left'
                    onClick={() => handleClick("left")}
                    style={{ display: ((!isMoved) || (slideNumber === 0)) && 'none' }} />
                <div className="container" ref={carouselRef}>
                    {carousel.content.map((item, i) => (
                        <Card key={item._id} index={i} movie={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}
