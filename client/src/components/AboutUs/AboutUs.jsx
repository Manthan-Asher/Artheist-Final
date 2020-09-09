import React, {useEffect} from "react";
import "./AboutUs.css";
import FullScrVideo from "../FullScrVideo/FullScrVideo";
import OurTeam from "../OurTeam/OurTeam";
import $ from "jquery";

const AboutUs = () => {

  $(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#whoAreWeText").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#whoAreWeText").slideUp();
      }
    });
  });
  
  // const listener = () => {
  //   console.log(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listener);
  //   return () => {
  //     window.removeEventListener("scroll", listener);
  //   };
  // });

  return (
    <section className="aboutUsContainer">
      <div className="aboutUsHeader">
        <div className="aboutHeaderContent">
          <h1>About Us</h1>
          <h2>"Where Talent Meets Opportunity"</h2>
          <a href="#ourTeam">Meet Our Team</a>
        </div>
      </div>
      <div className="artheistEssence">
        <div className="essenceLogo">{/* <img src={Logo} /> */}</div>
        <div className="essenceContent">
          <h2>Artheist Essence</h2>
          <p>
            ArtHeist was born out of an idea that each person is talented in
            their very own way. All of us have so many hidden talents that we
            never explore, majorly because we don't know how to showcase it. We
            at ArtHeist solve this problem by offering you a large scale
            platform for this very purpose.{" "}
          </p>
        </div>
      </div>

      <div class="ArtheistTrailer">
        <FullScrVideo />
      </div>

      <div className="ourIntegrity">
        <h1> Our Integrity </h1>
        <div className="ourIntegrityImgMob">
          <img
            src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/integrity.gif"
            alt="logo"
          />
        </div>
        <div className="ourIntegrityContent">
          <p>
            Our world is full of abilities, but not everyone gets a chance to
            showcase it to a broader audience. Many times people miss excellent
            opportunities, and this is where we come in. We make sure that you
            do not miss any chance anymore to perform, showcase what you are
            good at, and win contests along the way. Our contests span over
            almost every field of art including dance, music/singing, art,
            acting, poetry, photography, stand-up, movie making, designing and
            much more.
          </p>
        </div>
        <div className="ourIntegrityImg">
          <img
            src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/integrity.gif"
            alt="logo"
          />
        </div>
      </div>
      <div className="whoAreWe">
        <h1>Who are we ?</h1>
        <p>
          Artheist is #1 contest aggregation platform for people pursuing their
          interest either in visual, performance or applied arts. Art has many
          forms, and cannot be defined into a single category. We at artHeist
          provide different platforms to make sure that your talent gets a
          chance to shine in the spotlight. ArtHeist was born out of an idea
          that each person is talented in their very own way. All of us have so
          many hidden talents that we never explore, majorly because we don't
          know how to showcase it. We at ArtHeist solve this problem by offering
          you a large scale platform for this very purpose.
        </p>

        <p id="whoAreWeText" className="whoAreWeText">
          We also offer online contest management and help you create and
          execute your own contests using our website services. We can offer you
          full management of your online contest from the stage of planning to
          sending out the awards. Isn’t that great? Using our specialized
          software for online contest organization, you will save time, money
          and effort and success is guaranteed! We will take care that your
          message reaches as many people as possible by an innovative, creative
          and pleasant online contest, targeting thousands of artists. The
          target of ArtHeist is to constantly improve the online contest
          management process, to help talented young people and creative artists
          to present their works and show their skills. ArtHeist is a platform,
          where users can explore a wide range of talents and reconnect with
          them. Our goal is to work for people and help support their work, by
          showcasing it to a digital audience, giving them the praise and
          resepct they truly deserve.
        </p>
        <div class="whoAreWeTextBtn">
            <button id="toggle">Read More</button>
        </div>
      </div>

      {/* <div className="feedbackVideo">
        <h1>What People Say</h1>
        <div class="vid-container">
          <FullScrVideo />
        </div>
      </div> */}

      <div id="ourTeam" className="ourTeam">
        <h1>Meet Our People</h1>
        <div>
          <OurTeam />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
