import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../GlobalState/GlobalState";
import { ACTION } from "../../Const/Action";
import { MEDIA } from "../../Const/Consts";
import { AudioContext } from "../../GlobalState/AudioContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },

  title: {
    margin: theme.spacing(4, 0, 2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  divider: {
    backgroundColor: "rgba(255,255,255,0.1)",
    height: "2px",
  },
  playButton: {
    color: "rgba(255,255,255,0.4)",
  },
}));

export default function PodcastList({ podcasts }) {
  const classes = useStyles();
  const history = useHistory();
  const [{ currentPodcast }, dispatch] = useContext(GlobalContext);
  const { currentPlayStatus } = useContext(GlobalContext);
  const audioRef = useContext(AudioContext);

  const playSelectedItem = (data) => {
    history.push(`/episode/${data.id}`);
    dispatch({ type: ACTION.setPodcast, snippet: data });
  };
  const handlePlayer = (data) => {
    if (data.id !== currentPodcast.id || currentPlayStatus === MEDIA.PAUSE) {
      dispatch({ type: ACTION.setPodcast, snippet: data });
      dispatch({ type: ACTION.setPlayerState, snippet: MEDIA.PLAY });
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <List>
      {podcasts &&
        podcasts.map((podcast) => (
          <ListItem
            key={podcast.id}
            disableGutters
            divider={true}
            button
            onClick={() => playSelectedItem(podcast)}
          >
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                className={classes.large}
                src={podcast.imageURL}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={podcast.title}
              secondary={"secondary text"}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="play-stop"
                onClick={() => handlePlayer(podcast)}
              >
                <PlayCircleFilledIcon
                  className={classes.playButton}
                  fontSize="large"
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
}
