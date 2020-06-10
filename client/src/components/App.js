import React from 'react';
import './App.css'
import Carousel from "./Carousel/Carousel";
import Navbar from "./Navbar/Navbar";
import TopPicks from "./TopPicks/TopPicks";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <TopPicks />
    </div>
  );
}

export default App;
