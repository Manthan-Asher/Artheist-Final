import React from "react";
import Card from "./card/Card";
import "./HallOfFame.scss";

export default () => {
  return (
    <div className="main">
      <div className="ui container segment inverted">
        <div className="ui header huge">Hall of Fame</div>

        <div className="ui menu inverted">
          <div className="item active" href="#">
            Dance
          </div>
          <div className="item" href="#">
            Singing
          </div>
          <div className="item" href="#">
            Music
          </div>
          <div className="item" href="#">
            Drama/Acting
          </div>
        </div>

        <div className="link1">
          <Card
            date="December 29, 2019"
            name="Aayushi Kumari"
            image_link="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <Card
            date="December 29, 2019"
            name="Sridhar Singh"
            image_link="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <Card
            date="December 29, 2019"
            name="Keshav Sinha"
            image_link="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <div
          className="ui segment"
          style={{display: "flex", justifyContent: "center", backgroundColor: "#1B1C1D"}}
        >
          <button className="ui red button massive">View More</button>
        </div>
      </div>
    </div>
  );
};
