import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import contestPhoto from "../../../assets/contest.jpg";

import "./ContestCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt="Contest"
          height="140"
          image={contestPhoto}
          title="Contest"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dance Contest
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            July 29, 2020
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="secondary" variant="outlined">
          Enter Contest
        </Button>
      </CardActions>
    </Card>
  );
}
