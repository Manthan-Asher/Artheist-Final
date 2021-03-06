import React, {Component} from "react";
import "./topPicks.scss";
import "../../../node_modules/video-react/dist/video-react.css";
import {Player, BigPlayButton, ControlBar} from "video-react";
import {Button} from "@material-ui/core";



class TopPicks extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
    };

    this.play1 = this.play1.bind(this);
    this.play2 = this.play2.bind(this);
    this.play3 = this.play3.bind(this);
    this.play4 = this.play4.bind(this);
    this.play5 = this.play5.bind(this);
    this.pause1 = this.pause1.bind(this);
    this.pause2 = this.pause2.bind(this);
    this.pause3 = this.pause3.bind(this);
    this.pause4 = this.pause4.bind(this);
    this.pause5 = this.pause5.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player1.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange = (state) => {
    // copy player state to this component's state
    this.setState({
      player1: state,
      player2: state,
      player3: state,
      player4: state,
      player5: state,
    });
  };

  play1() {
    const {player} = this.player1.getState();
    if (player.currentTime < 10) {
      this.player1.play();
      window.myvar1 = setTimeout(() => {
        this.player1.pause();
        this.setState({button1: true});
      }, 10000 - player.currentTime * 1000);
    }
  }
  play2() {
    const {player} = this.player2.getState();
    if (player.currentTime < 10) {
      this.player2.play();
      window.myvar2 = setTimeout(() => {
        this.player2.pause();
        this.setState({button2: true});
      }, 10000 - player.currentTime * 1000);
    }
  }
  play3() {
    const {player} = this.player3.getState();
    if (player.currentTime < 10) {
      this.player3.play();
      window.myvar3 = setTimeout(() => {
        this.player3.pause();
        this.setState({button3: true});
      }, 10000 - player.currentTime * 1000);
    }
  }
  play4() {
    const {player} = this.player4.getState();
    if (player.currentTime < 10) {
      this.player4.play();
      window.myvar4 = setTimeout(() => {
        this.player4.pause();
        this.setState({button4: true});
      }, 10000 - player.currentTime * 1000);
    }
  }
  play5() {
    const {player} = this.player5.getState();
    if (player.currentTime < 10) {
      this.player5.play();
      window.myvar5 = setTimeout(() => {
        this.player5.pause();
        this.setState({button5: true});
      }, 10000 - player.currentTime * 1000);
    }
  }

  pause1() {
    this.player1.pause();
    clearTimeout(window.myvar1);
    this.setState({button1: false});
    this.player1.seek(0);
  }
  pause2() {
    this.player2.pause();
    clearTimeout(window.myvar2);
    this.setState({button2: false});
    this.player2.seek(0);
  }
  pause3() {
    this.player3.pause();
    clearTimeout(window.myvar3);
    this.setState({button3: false});
    this.player3.seek(0);
  }
  pause4() {
    this.player4.pause();
    clearTimeout(window.myvar4);
    this.setState({button4: false});
    this.player4.seek(0);
  }

  pause5() {
    this.player5.pause();
    clearTimeout(window.myvar5);
    this.setState({button5: false});
    this.player5.seek(0);
  }

  render() {
    return (
      <div className="contain">
        <h1>Top Picks</h1>

        {/* <p>Check out the winners of the Latest contest !</p> */}

        <div className="row">
          <div className="row__inner">
            {/* <div className="tile">
              <div className="tile__media">
                <Player
                  playsInline
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  ref={(player1) => {
                    this.player1 = player1;
                  }}
                >
                  <BigPlayButton position="center" />
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="tile__details">
                <div className="tile__title">Top Gear</div>
              </div>
            </div> */}
            <div
              className="tile"
              onMouseEnter={this.play1}
              onMouseLeave={this.pause1}
            >
              <div className="tile__media">
                <Player
                  playsInline
                  // src={x}
                  src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/DemoVideo.mp4"
                  ref={(player1) => {
                    this.player1 = player1;
                  }}
                >
                  {this.state.button1 ? (
                    <Button variant="contained" className="video-button">
                      Continue Watching
                    </Button>
                  ) : null}
                  <BigPlayButton position="center" />
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="tile__details">
                <div className="tile__title">Top Gear</div>
              </div>
            </div>

            <div
              className="tile"
              onMouseEnter={this.play2}
              onMouseLeave={this.pause2}
            >
              <div className="tile__media">
                <Player
                  playsInline
                  // src={y}
                  src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/DemoVideo.mp4"
                  ref={(player2) => {
                    this.player2 = player2;
                  }}
                >
                  {this.state.button2 ? (
                    <Button variant="contained" className="video-button">
                      Continue Watching
                    </Button>
                  ) : null}
                  <BigPlayButton position="center" />
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="tile__details">
                <div className="tile__title">Top Gear</div>
              </div>
            </div>

            <div
              className="tile"
              onMouseEnter={this.play3}
              onMouseLeave={this.pause3}
            >
              <div className="tile__media">
                <Player
                  playsInline
                  // src={z}
                  src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/DemoVideo.mp4"
                  num="3"
                  ref={(player3) => {
                    this.player3 = player3;
                  }}
                >
                  {this.state.button3 ? (
                    <Button variant="contained" className="video-button">
                      Continue Watching
                    </Button>
                  ) : null}
                  <BigPlayButton position="center" />
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="tile__details">
                <div className="tile__title">Top Gear</div>
              </div>
            </div>

            <div
              className="tile"
              onMouseEnter={this.play4}
              onMouseLeave={this.pause4}
            >
              <div className="tile__media">
                <Player
                  playsInline
                  // src={a}
                  src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/DemoVideo.mp4"
                  num="4"
                  ref={(player4) => {
                    this.player4 = player4;
                  }}
                >
                  {this.state.button4 ? (
                    <Button variant="contained" className="video-button">
                      Continue Watching
                    </Button>
                  ) : null}
                  <BigPlayButton position="center" />
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="tile__details">
                <div className="tile__title">Top Gear</div>
              </div>
            </div>

            <div
              className="tile"
              onMouseEnter={this.play5}
              onMouseLeave={this.pause5}
            >
              <div className="tile__media">
                <Player
                  playsInline
                  // src={b}
                  src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/DemoVideo.mp4"
                  num="5"
                  ref={(player5) => {
                    this.player5 = player5;
                  }}
                >
                  {this.state.button5 ? (
                    <Button variant="contained" className="video-button">
                      Continue Watching
                    </Button>
                  ) : null}
                  <BigPlayButton position="center" />
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="tile__details">
                <div className="tile__title">Top Gear</div>
              </div>
            </div>
          </div>
        </div>
        <p className="topPicksPara">" Welcome to artHeist! This is a collection of some of the top entries that we have received.
         Do have a look and support these gifted artists and also participate in our various contests to get featured here. "</p>
        {/* <p className="topPicksPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veniam necessitatibus nisi excepturi officia quasi nam quo vero optio pariatur repudiandae aliquid, accusamus vitae saepe praesentium quidem sit? Provident, similique</p> */}
      </div>
    );
  }
}

export default TopPicks;
