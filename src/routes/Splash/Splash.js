import React from "react";
import { ReactComponent as Logo } from "./Logo.svg";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from './background.svg';


const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh - 150px);",
    backgroundImage:`url(${"./background.png"})`,
  },
}));
export default function Splash() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
      style = {{backgroundImage:`url(${background})`}}
    >
      <Logo />
    </Grid>
  );
}
