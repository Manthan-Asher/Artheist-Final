import React from 'react';
import Carousel from "../Carousel/Carousel";
import TopPicks from "../TopPicks/TopPicks";
import Description from "../Description/Description";
import HallOfFame from "../hall-of-fame/HallOfFame";
import Testimonials from "../testimonials/Testimonials";

const HomePage = () => {
    return ( 
        <>
          <Carousel />
          <TopPicks />
          <Description />
          <HallOfFame />
          <Testimonials />
        </>
     );
}
 
export default HomePage;