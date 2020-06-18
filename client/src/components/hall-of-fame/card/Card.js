import React from "react";
import "./Card.scss";

export default (props) => {
  return (
    <div className="lol">
      <div className="card1">
        <div className="image">
          <img alt="dance" src={props.image_link} />
        </div>
        <div className="content">
          <div className="meta">{props.date}</div>
          <div className="header">{props.name}</div>
          <div className="more">Read More</div>
        </div>
      </div>
    </div>
  );
};
