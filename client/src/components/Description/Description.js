import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Description.css";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="what-we-do">
      <div className="bgContainer">
        <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/artform2(1).png"
         className="whatWeDoBgImg" alt="whatWeDoBgImg" />
      </div>
      <div className="description-box">
        <Typography
          component="div"
          align="center"
          noWrap={false}
          paragraph={true}
        >
          <Box fontFamily="Noto Serif" fontWeight={700} textAlign="center">
            <h1 className="desc-title">What We Do ?</h1>
          </Box>
          <Box textAlign="center" fontFamily="Open Sans">
            <p className="description">
            We organize contests with well-known artists from Instagram, ad firms &amp; different social media handles to promote talented people like you,
             giving ordinary people an extraordinary opportunity to showcase their skills on a large scale platform. 
            </p>
            <button className="whatWeDoBtn">
              <Link to="/aboutUs">Know More</Link>
            </button>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default Description;
