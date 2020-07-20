import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 170,
    // backgroundColor:"rgba(0,0,0,0)"
  },
  media: {
    height: 0,
    paddingTop: "100%" // 16:9
  }
}));

export default function RecipeReviewCard({product}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation = {0} >
      <CardMedia
        className={classes.media}
        image={product.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" >
            {product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" >
          {product.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <Button color = "secondary">Add to Cart</Button> */}
      </CardActions>
    </Card>
  );
}
