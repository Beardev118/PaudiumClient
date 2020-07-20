import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { findDangerousChanges } from "graphql";

const useStyles = makeStyles((theme) => ({}));

export default function TimeLine({ audioState, player }) {
  const classes = useStyles();

  const [currentTime, setCurrentTime] = useState(0);
  const [value, setValue] = React.useState(30);
  const sliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (player) {
      setCurrentTime(player.currentTime);
    }
    // we will update the time of player every 800ms
    let setTimeInterval;
    if (audioState === "playing") {
      setTimeInterval = setInterval(() => {
        setCurrentTime(player.currentTime);
      }, 800);
    } else {
      clearInterval(setTimeInterval);
    }
    return () => clearInterval(setTimeInterval);
  }, [audioState, player]);

  const handleChange = (event, newValue) => {
    if (player) {
      player.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

  const showDuration = () => {
    if (player) {
      if (player.duration) {
        return formatTime(player.duration);
      } else {
        return "00:00";
      }
    } else {
      return 0;
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid item xs={2}>
          <Typography gutterBottom variant="body2">
            02:35
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Box mx={1}>
            <Slider
              value={currentTime}
              onChange={handleChange}
              aria-label="custom thumb label"
              defaultValue={0}
            />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant="body2">
            02:35
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
