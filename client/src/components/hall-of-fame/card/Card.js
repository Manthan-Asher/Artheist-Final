import React from "react";
import "./Card.scss";

export default (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img alt="dance" src={props.image_link} />
      </div>
      <div className="content x">
        <div className="meta">{props.date}</div>
        <div className="header">{props.name}</div>
      </div>
      <div className="extra content x">
        <span className="right floated">Read More</span>
      </div>
    </div>
  );
};
