import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { GlobalContext } from "../../GlobalState/GlobalState";
import { ACTION } from "../../Const/Action";
import { MEDIA } from "../../Const/Consts";
import { AudioContext } from "../../GlobalState/AudioContext";
import BookmarkIcon from "../../components/MediaPlayer/Components/Icons/BookmarkIconFilled";

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import PropTypes from "prop-types";
import { FixedSizeList } from "react-window";

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
  bookmarkButton: {
    color: "rgba(65,75,105,1.0)",
  },
  podcastList: {
    marginTop: 80,
  },

  rootList: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    listStyleType: "none",
  },
}));

export default function ExploreDetail({ match }) {
  const category = match.params.category;
  console.log("category", category);
  const { loading, error, data } = useQuery(GET_PODGROUP, {
    variables: { category },
  });
  console.log("pod cateogry datea", data);
  const dataPod = data && data.getpodGroupByCategory;
  console.log("pod cateogry datea", dataPod);
  const classes = useStyles();
  const history = useHistory();
  const [{ currentPodcast }, dispatch] = useContext(GlobalContext);
  const { currentPlayStatus } = useContext(GlobalContext);
  const audioRef = useContext(AudioContext);

  const playSelectedItem = (data) => {
    history.push(`/podgroup/${data.id}`);
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
      <div className={classes.root}>
         <div>
         {dataPod &&dataPod.map((item) => (
            <ListItem
              key={item.id}
              disableGutters
              divider={true}
              button
              onClick={() => playSelectedItem(item)}
              className={classes.listItem}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  className={classes.large}
                  src={item.podImage}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.podTitle}
                secondary={"secondary text"}
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="play-stop"
                  onClick={() => handlePlayer(item)}
                >
                  <BookmarkIcon className={classes.bookmarkButton} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </div>
      </div>
  );
}

const GET_PODGROUP = gql`
  query($category: String!) {
    getpodGroupByCategory(category: $category) {
      id
    podTitle
    podImage
    }
  }
`;
