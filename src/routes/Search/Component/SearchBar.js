import React, { useContext } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../../../GlobalState/GlobalState";
import { ACTION } from "../../../Const/Action";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  cancel: {},
}));

export default function Searchbar() {
  const [{ currentSearchKeyWords }, dispatch] = useContext(GlobalContext);
  const classes = useStyles();
  const handleSearchKeyWordChange = (value) => {
    dispatch({ type: ACTION.setSearchKeys, snippet: value });
  };

  const handleSearchCancel = () => {
    dispatch({ type: ACTION.setSearchKeys, snippet: "" });
  };
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item xs={9}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => handleSearchKeyWordChange(e.target.value)}
            value={currentSearchKeyWords}
          />
        </div>
      </Grid>
      <Grid item>
        <Button color="secondary" onClick={handleSearchCancel}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
}
