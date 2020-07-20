import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import BookmarkIcon from "./Components/BookmarkIcon";
import ShareIcon from "./Components/ShareIcon";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    backgroundColor: "#1D2c56",
  },
  logoContainer: {
    position: "absolute",
  },
  logoLink: {
    textDecoration: "none",
    color: "#FFF",
  },
}));
export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
          color = "secondary"
          onClick={() => history.goBack()}
        >
          <KeyboardBackspaceIcon />
        </IconButton>

        <Typography variant="h4" className={classes.title}>
          <Link className={classes.logoLink} to="/">
            Podcast{" "}
          </Link>
        </Typography>
        <IconButton>
          <ShareIcon color="secondary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
