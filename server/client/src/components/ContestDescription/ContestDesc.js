import React, {Component} from "react";
import "./ContestDesc.css";
import {Button} from "react-bootstrap";
import logo from "../../assets/default-avatar.jpg";
import {connect} from "react-redux";
import {getContestById} from "../../actions/contests";

import ccc from "../../assets/carousal_demo.png";

class ContestDesc extends Component {
  componentDidMount() {
    this.props.getContestById(this.props.match.params.id);
  }

  render() {
    if (!this.props.contest) {
      return "Loading";
    }
    const {
      type,
      name,
      start_date,
      end_date,
      prize,
      organized_by,
      description,
      juries,
    } = this.props.contest;
    return (
      <div className="conDescBg">
        <div className="contestDescContainer">
          <div className="contest-poster">
            <img src={ccc} alt="" className="poster-image" />
            <Button variant="warning" className="contest-button" size="lg">
              Enter The Contest Now
            </Button>
          </div>
          <div className="contestDetails">
            <div className="hostedBy">
              <div className="img-box">
                <img src={logo} />
              </div>
              <div className="text-Info">
                Hosted By <span>{organized_by}</span>
              </div>
            </div>
            <div className="overView">
              <h2>Contest Overview</h2>
              <p>{description}</p>
            </div>
            <div className="descriptionContent">
              <h2>Description</h2>
              <div className="desc-Left">
                <div className="sub-desc">
                  <h2>Category:</h2>
                  {type}
                </div>
                <div className="sub-desc">
                  <h2>Start Date:</h2>
                  {start_date}
                </div>
                <div className="sub-desc">
                  <h2>End Date:</h2>
                  {end_date}
                </div>
                <div className="sub-desc">
                  <h2>Submission Period:</h2>
                  10 July 2020 - 13 July 2020
                </div>
                <div className="sub-desc">
                  <h2>Winners Announced:</h2>
                  21 July 2020
                </div>
                <div className="sub-desc">
                  <h2>Eligibilty Criteria:</h2>
                  No age limit, Gender ALL
                </div>
                <div className="sub-desc">
                  <h2>Rewards:</h2>
                  Rs. {prize}/- with amazing vouchers
                </div>
              </div>
            </div>
          </div>
          <div className="judgesDetails">
            <div>
              <h2>Contest Jury</h2>
            </div>
            {juries.length > 0 &&
              juries.map((jury) => {
                return (
                  <div className="juryBox">
                    <div className="juryPhoto">
                      <img src={logo}></img>
                    </div>
                    <div className="juryName">{jury}</div>
                    <div className="jurySocialMedia">
                      <i className="fa fa-facebook"></i>
                      <i className="fa fa-instagram"></i>
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="juryAbout">
                      Lorem ipsum dolor sit amet con sectetur adipisicing
                      elitliquam quam nemo{" "}
                    </div>
                    <div className="juryBtn">
                      <button>View Profile</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contest: state.contests.contest,
});

export default connect(mapStateToProps, {getContestById})(ContestDesc);
