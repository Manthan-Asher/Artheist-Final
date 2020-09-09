import React from 'react';
import { Carousel } from "react-bootstrap";
import "./MobCarousel.css";
import { Link } from "react-router-dom";

const MobileCarousel = () => {
    return ( 
        <div className="mobileCarousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/watercolor.jpg"
                    alt="First slide"
                    />
                    <div>
                        <h4>Active Contest</h4>
                        <button className="participateBtnMobile">
                            <Link to="/contest">Participate Now</Link>
                        </button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/watercolor.jpg"
                    alt="Third slide"
                    />
                    <div>
                        <h4>Active Contest</h4>
                        <button className="participateBtnMobile">
                            <Link to="/contest">Participate Now</Link>
                        </button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/watercolor.jpg"
                    alt="Third slide"
                    />
                    <div>
                        <h4>Active Contest</h4>
                        <button className="participateBtnMobile">
                            <Link to="/contest">Participate Now</Link>
                        </button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
     );
}

export default MobileCarousel;