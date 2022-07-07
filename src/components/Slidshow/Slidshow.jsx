import React, { useEffect, useState } from "react";
import "./Slidshow.css";
const slidpicture = [
    "/image/chicago.jpg",
    "/image/losA.jpg",
    "/image/ny.jpg",
];


let count = 0;
const Slidshow = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        startSlider();
    }, [])


    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 3000);
    }

    const handleOnNextClick = () => {
        count = (count + 1) % slidpicture.length;
        setCurrentIndex(count)
    }

    const handleOnPreviousClick = () => {
        const imageslength = slidpicture.length;

        count = (currentIndex + imageslength - 1) % imageslength;
        setCurrentIndex(count)
    }


    return (
        <div className="slidshow">
            <div className="slidecontent">
                <img src={slidpicture[currentIndex]} alt="" />
                {/* <img src="/image/losA.jpg" alt="" /> */}
            </div>
            <div className="btn-slide">
                <button onClick={handleOnPreviousClick}></button>
                <button onClick={handleOnNextClick}></button>
            </div>
        </div>

    );
}

export default Slidshow;