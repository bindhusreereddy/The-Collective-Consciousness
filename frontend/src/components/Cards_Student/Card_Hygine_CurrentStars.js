import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const {data} = props;
  let x = [];
  data.forEach((item) => x.push(item.star));
  var totalStars = x.reduce((item,next) => (item+next));
  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://us.123rf.com/450wm/ssilver/ssilver1512/ssilver151200021/50227272-five-star-rating-shiny-golden-stars.jpg?ver=6"
          title="Current Stars"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Current Stars : 
            {totalStars}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
           Following are the student's data 
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
