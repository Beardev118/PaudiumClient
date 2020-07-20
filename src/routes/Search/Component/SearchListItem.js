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
import BookmarkIcon from "../../../components/MediaPlayer/Components/Icons/BookmarkIcon";

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

export default function SearchListItem({ id, title, image }) {
  const history = useHistory();
  const classes = useStyles();

  const onSearchItem = (id) => {
    history.push(`/podgroup/${id}`);
  };

  return (
    <div>
      <ListItem
        key={id}
        disableGutters
        divider={true}
        button
        className={classes.listItem}
        onClick={() => {
          onSearchItem(id);
        }}
        // style={style}
      >
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            className={classes.large}
            src={image}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={"secondary text"} />

        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="play-stop">
            <BookmarkIcon className={classes.bookmarkButton} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
