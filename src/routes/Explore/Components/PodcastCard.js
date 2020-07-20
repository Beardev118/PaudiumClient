import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import NoImage from "../../../asset/noImage.png";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // maxWidth: 116,
    width: 116,
    backgroundColor: "rgba(255,255,255,0)",
  },
  media: {
    height: 113,
    borderRadius: 4,
  },
});

export default function MediaCard({ id, image, title }) {
  const classes = useStyles();
  const history = useHistory();
  console.log("card Image", image);
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          id={id}
          image={image ? image : NoImage}
          title={title}
          onClick={() => {
            history.push(`/podgroup/${id}`);
          }}
          src = {NoImage}
        />
      </CardActionArea>
      <Grid item zeroMinWidth>
        <Typography
          gutterBottom
          variant="body2"
          noWrap
          color="secondary"
          align="center"
        >
          {title.substring(0, 25)}
        </Typography>
      </Grid>
    </Card>
  );
}

