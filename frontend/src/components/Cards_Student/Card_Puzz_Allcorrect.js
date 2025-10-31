import React from "react";
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
  data.forEach((item) => x.push(item.correct));
  var totalCorrect = x.reduce((item,next) => (item+next));
  totalCorrect = 18
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.nicepng.com/png/detail/44-446759_download-for-free-correct-and-wrong-sign.png"
          title="All Correct"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Number of All Correct Attempts : {totalCorrect}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
           Following are the student's data 
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
