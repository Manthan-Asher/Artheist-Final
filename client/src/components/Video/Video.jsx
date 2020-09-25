import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Video.css";
//import DemoVideo from "../../demoVideo.mp4";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  const stopMovie = (e) => {
    e.target.pause();
    console.log('off');
  }
  
  const playMovie = (e) => {
    e.target.play();
    console.log('on');
  }

  return (
    <Card className={classes.root}>
      <div
      // component="video"
      // height="180"
      >
        <video
          width="330"
          height="180"
          controls
          muted
          loop
          controlsList="nodownload"
          //poster="https://387b72ivq1z3mni0n261y7l1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/app-store-video.jpg"
          onMouseOver={playMovie}
          onMouseOut={stopMovie}
        >
          <source
            src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/DemoVideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Artist Name
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Winner of the FootLoose Contest.
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
          Watch Now
        </Button>
      </CardActions>
    </Card>
  );
}
