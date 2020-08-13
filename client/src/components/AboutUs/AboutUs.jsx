import React from 'react';
import "./AboutUs.css";


const AboutUs = () => {
    return ( 
        <section className="aboutUsContainer">
            <div className="aboutUsHeader">
                <div className="aboutHeaderContent">
                    <h1>About Us</h1>
                    <h2>"Where Talent Meets Opportunity"</h2>
                    <button>Meet Our Team</button>
                </div>
            </div>
            <div className="artheistEssence">
                <div className="essenceLogo">
                    {/* <img src={Logo} /> */}
                </div>
                <div className="essenceContent">
                    <h2>Artheist Essence</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam iure, aliquid molestias in 
                        impedit ullam praesentium officiis enim,eveniet nisi voluptatem facere sequi modi fuga cumque debitis
                        porro aperiam. </p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quibusdam iure, aliquid
                        molestias in impedit ullam praesentium officiis enim, eveniet nisi voluptatem facere sequi modi fuga 
                        cumque debitis porro aperiam.</p>
                </div>
            </div>
            <div className="trailerVideo">
                <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls autoPlay loop muted></video>
            </div>
            <div className="ourIntegrity">
                <h1> Our Integrity </h1>
                <div className="ourIntegrityContent">
                    <p className="equation">Integrity = Artists Experience/ Artists expectations....</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illo nostrum sunt repellendus ex 
                    delectus repudiandae nulla distinctio autem tempora harum exercitationem, doloribus obcaecati! Harum 
                    inventore commodi possimus consectetur architecto.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illo nostrum sunt repellendus ex 
                    delectus repudiandae nulla distinctio autem tempora harum exercitationem, doloribus obcaecati! Harum 
                    inventore commodi possimus consectetur architecto.</p>
                </div>
                <div className="ourIntegrityImg">
                    <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/logo1.jpeg" alt="logo"/>
                </div>
            </div>
            <div className="whoAreWe">
                <h1>Who are we ?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illo nostrum sunt repellendus ex 
                    delectus repudiandae nulla distinctio autem tempora harum exercitationem, doloribus obcaecati! Harum 
                    inventore commodi possimus consectetur architecto Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illo nostrum sunt repellendus ex 
                    delectus repudiandae nulla distinctio autem tempora harum exercitationem, doloribus obcaecati! Harum 
                    inventore commodi possimus consectetur architecto Nulla perspiciatis officiis aperiam vitae illo sed atque sint velit tempora nam ea hic odio dolores, doloremque a voluptatem doloribus? Ullam, ea.</p>
            </div>
            <div className="feedbackVideo">
                <h1>What People Say</h1>
                <div className="trailerVideo">
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls autoPlay loop muted></video>
                </div>
            </div>
            <div className="ourTeam">
                <h1>Meet Our People</h1>
                <div>
                    <div className="memberPhotos">
                        <div>
                            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/ryan.jpg" alt="member-photo"/> 
                        </div>
                        <div>
                            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/ryan.jpg" alt="member-photo"/>
                        </div>
                        <div>
                            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/ryan.jpg" alt="member-photo"/>
                        </div>
                        <div>
                            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/ryan.jpg" alt="member-photo"/>
                        </div>
                        <div>
                            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/ryan.jpg" alt="member-photo"/>
                        </div>
                        <div>
                            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/ryan.jpg" alt="member-photo"/>
                        </div>
                    </div>
                    <div className="aboutMember">
                        <h2>Aditya Rathore</h2>
                        <p>Delectus repudiandae nulla distinctio autem tempora harum exercitationem, doloribus obcaecati! Harum 
                    inventore commodi possimus consectetur architecto Nulla perspiciatis officiis aperiam electus repudiandae nulla distinctio autem tempora harum exercitationem, doloribus obcaecati! Harum 
                    </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutUs;