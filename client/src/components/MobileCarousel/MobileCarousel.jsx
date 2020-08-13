import React from 'react';
import { Carousel } from "react-bootstrap";
import waterPhoto from "../../assets/watercolor.jpg";
import "./MobCarousel.css";

const MobileCarousel = () => {
    return ( 
        <div className="mobileCarousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={waterPhoto}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={waterPhoto}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={waterPhoto}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
     );
}

export default MobileCarousel;