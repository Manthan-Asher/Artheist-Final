import React from 'react';
import { Carousel } from "react-bootstrap";
import "./MobCarousel.css";
import { Link } from "react-router-dom";
import poster from "../../posterbg.png";

const MobileCarousel = () => {
    return ( 
        <div className="mobileCarousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={poster}
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
                    src={poster}
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
                    src={poster}
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