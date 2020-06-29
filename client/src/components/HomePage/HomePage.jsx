import React from 'react';
import Carousel from "../Carousel/Carousel";
import TopPicks from "../TopPicks/TopPicks";
import Description from "../Description/Description";
import HallOfFame from "../HallOfFame/HallOfFame";
import Testimonials from "../Testimonials/Testimonials";
import HowItWorks from '../HowItWorks/HowItWorks';

const HomePage = () => {
    return ( 
        <>
          <Carousel />
          <TopPicks />
          <Description />
          <HowItWorks />
          <HallOfFame />
          <Testimonials />
        </>
     );
}
 
export default HomePage;