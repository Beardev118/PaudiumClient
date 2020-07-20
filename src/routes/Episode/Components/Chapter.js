import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import NoteIcon from "../../../components/MediaPlayer/Components/Icons/EditIcon";
import PlayStopButton from "../../../components/MediaPlayer/Components/PlayStopButton";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flex: 1,
  },
}));
export default function Chapter() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <PlayStopButton />
        </Grid>
        <Grid item xs={10} container>
          <Grid container justify="space-between">
            <Typography>Chapter1</Typography>
            <Typography>3:30 - 03:29</Typography>
          </Grid>
          <Grid container>
            <Typography variant="subtitle1">
              “Growing companies is a much more repeatable process,”
            </Typography>
          </Grid>
          <Grid container justify="space-between" direction="row">
            <Grid item xs={3} container direction="row" alignItems="center">
              <Typography>2</Typography>
              <IconButton>
                <NoteIcon />
              </IconButton>
            </Grid>
            <div className={classes.grow} />
            <Grid item xs={3} container direction="row" alignItems="center">
              <Typography>45</Typography>
              <IconButton>
                <NoteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} container direction="row" alignItems="center">
              <Typography>8</Typography>
              <IconButton>
                <NoteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider color="primaery" />
    </div>
  );
}
