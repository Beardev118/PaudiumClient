import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TimeLine from "./Components/TimeLine";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import NoteIcon from "../../components/MediaPlayer/Components/Icons/NoteIcon";

import { GlobalContext } from "../../GlobalState/GlobalState";
import { AudioContext } from "../../GlobalState/AudioContext";
import { ACTION } from "../../Const/Action";
import { MEDIA } from "../../Const/Consts";
import { PLAYER_SIZE } from "../../Const/PlayerSize";

import EditIcon from "./Components/Icons/EditIcon";
const useStyles = makeStyles((theme) => ({
  minContainer: {
    width: "100vw",
    borderRadius: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "6px",
    paddingBottom: "6px",
  },
  iconButton: {
    paddingLeft: 10,
  },
}));

export default function MiniPlayer() {
  const [
    { currentPodcast, currentPlayStatus, currentPlayerSize },
    dispatch,
  ] = useContext(GlobalContext);
  const audioRef = useContext(AudioContext);

  const classes = useStyles();
  const player = audioRef.current;
  const handlePlayPause = () => {
    if (currentPlayStatus === MEDIA.PAUSE) {
      player.play();
    }
    if (currentPlayStatus === MEDIA.PLAY) {
      player.pause();
    }
  };
  return (
    <Paper className={classes.minContainer}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={2}>
          {console.log("podcast Image URL", currentPodcast)}
          <Avatar
            variant="rounded"
            src={currentPodcast && currentPodcast.imageURL}
          />
        </Grid>
        <Grid item xs={6}>
          <Box ml={-2} mb={-4}>
            <Typography noWrap>
              {currentPodcast && currentPodcast.title}
            </Typography>
            <TimeLine
              audioState={currentPlayStatus}
              player={audioRef.current}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          container
          spacing={1}
          justify="flex-end"
          direction="row"
          alignI
          tems="center"
        >
          <Grid item spacing={2}>
            <IconButton className={classes.iconButton}>
              <NoteIcon color="primary" />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              onClick={() => handlePlayPause()}
            >
              {currentPlayStatus ? (
                <PauseCircleFilledIcon />
              ) : (
                <PlayCircleFilledIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
