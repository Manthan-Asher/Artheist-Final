import React from "react";
import HallOfFame from "./hall-of-fame/HallOfFame";
import Testimonials from "./testimonials/Testimonials";
import "./App.css";
import Carousel from "./Carousel/Carousel";
import Navbar from "./Navbar/Navbar";
import TopPicks from "./TopPicks/TopPicks";
import Description from "./Description/Description";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";

export default () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <TopPicks />
      <Description />
      <HallOfFame />
      <Testimonials />
    </div>
  );
};
