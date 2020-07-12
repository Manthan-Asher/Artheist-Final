import React, { Component } from 'react';
import "./ContestDesc.css";
import logo from "../../assets/default-avatar.jpg";

class ContestDesc extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="conDescBg">
                <div className="contestDescContainer">
                    <div className="contestDetails">
                        <div className="hostedBy">
                            <div className="img-box"><img src={logo} /></div>
                            <div className="text-Info">Hosted By <span>Artheist</span></div>
                        </div>
                        <div className="overView">
                            <h2>Contest Overview</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam nemo explicabo nam saepe,
                            fugit magnam aperiam totam provident iste alias reprehenderit! Delectus porro eveniet quas corporis.
                            Incidunt, cupiditate facere.Aliquam quam nemo explicabo nam saepe,
                            fugit magnam aperiam totam provident iste alias reprehenderit! Delectus porro eveniet quas corporis.
                            Incidunt, cupiditate facere.</p>
                        </div>
                        <div className="descriptionContent">
                            <h2>Description</h2>
                            <div className="desc-Left">
                                <div className="sub-desc">
                                    <h2>Category:</h2>
                                    Dance
                                </div>
                                <div className="sub-desc">
                                    <h2>Start Date:</h2>
                                    13 July 2020
                                </div>
                                <div className="sub-desc">
                                    <h2>End Date:</h2>
                                    18 July 2020
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
                                    Rs. 10000/- with amazing vouchers
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="judgesDetails">
                        <div><h2>Contest Jury</h2></div>
                        <div className="juryBox">
                            <div className="juryPhoto">
                                <img src={logo}></img>
                            </div>
                            <div className="juryName">Jury Name</div>
                            <div className="jurySocialMedia">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="juryAbout">Lorem ipsum dolor sit amet con sectetur adipisicing
                             elitliquam quam nemo </div>
                            <div className="juryBtn">
                                <button>View Profile</button>
                            </div>
                        </div>
                        <div className="juryBox">
                        <div className="juryPhoto">
                                <img src={logo}></img>
                            </div>
                            <div className="juryName">Jury Name</div>
                            <div className="jurySocialMedia">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="juryAbout">Lorem ipsum dolor sit amet con sectetur adipisicing
                             elitliquam quam nemo </div>
                            <div className="juryBtn">
                                <button>View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ContestDesc;