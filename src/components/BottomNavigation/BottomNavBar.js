import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ExplorerIcon from "./Icons/ExplorerIcon";
import PlaylistIcon from "./Icons/Playlist";
import ProfileIcon from "./Icons/ProfileIcon";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {useHistory} from 'react-router-dom';
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    marginTop: "auto",
    left: 0,
    zIndex:10000,
  },
});

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const history  = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      showLabels = {true}
    >
      <BottomNavigationAction
        label="Playlist"
        value="playlist"
        icon={<PlaylistIcon />}
        color="secondary"
        onClick = {()=>{history.push('/playlist')}}
      />
      <BottomNavigationAction
        label="Explore"
        value="explore"
        icon={<ExplorerIcon  />}
        color="secondary"
        onClick = {()=>{history.push('/explore')}}

      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon fontSize="large"/>}
        color="secondary"
        onClick = {()=>{history.push('/search')}}

      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<ProfileIcon />}
        color="secondary"
        onClick = {()=>{history.push('/profile')}}

      />
    </BottomNavigation>
  );
}
