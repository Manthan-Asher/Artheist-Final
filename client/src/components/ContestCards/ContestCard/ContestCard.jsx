import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

import poster from "../../../posterbg.png";

import "./ContestCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function ImgMediaCard({
  contest: {name, start_date, end_date, type, organized_by, imageUrl, _id},
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        alt="Contest"
        height="200"
        image={
          imageUrl
            ? imageUrl
            : poster
        }
        title="Contest"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name ? name : "Dance Contest"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {start_date ? start_date : "July 7 2020"} -{" "}
          {end_date ? end_date : "July 31 2020"}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        {/* <Button size="small" color="secondary" variant="outlined">
          <Link to={`/contestDesc/${_id}`}>Enter Contest</Link>
        </Button> */}
        <Button size="small" color="secondary" variant="outlined">
          <Link to={`/contests/${_id}`}>Enter Contest</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
