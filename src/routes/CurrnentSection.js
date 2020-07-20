import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "@material-ui/core";
import MainPlayer from "../routes/Player";
import Episode from "../routes/Episode/Episode";
import PodGroup from "./Podcast/PodGroup";
import Episodes from "./Episodes";
import Chapters from "./Episode/Chapters";
import PlayList from "./Playlist/Playlist";
import Explore from "./Explore/Explore";
import ExploreDetail from "./Explore/ExploreDetail";
import Search from "./Search/Search";
import Profile from "./Profile/Profile";
import ecommerce from "./Ecommerce/Ecommerce";
import EcwidNav from "./Ecommerce/EcwidHeader";
import Spring from "../components/MediaPlayer";

import NavBar from "../components/NavBar/MediaTopBar/index";
import BottomNavigation from "../components/BottomNavigation/BottomNavBar";
import Test from "../routes/test";
import Chapter from "../routes/Episode/Components/Chapter";
import Ecwid from "./Ecommerce/Ecwid";

const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register"));
const HomePage = lazy(() => import("./Home"));

const useStyles = makeStyles((theme) => ({
  container: {
    color: "#FFF",
  },
}));

const returnMainPlayer = (props) => {
  // we will return the main player if the path is not the "/"

  if (window.location.pathname !== "/") {
    return <MainPlayer {...props} />;
  } else {
    return null;
  }
};

const episodePath = "/episode";
const circularLoader = (
  <Grid
    style={{ height: "100vh" }}
    container
    justify="center"
    alignItems="center"
  >
    <CircularProgress />
  </Grid>
);

const CurrentSection = ({ history, location }) => {
  const classes = useStyles();
  return (
    <div>
      <Suspense fallback={circularLoader}>
        {/* <NavBar/> */}
        {!location.pathname.match(/search/) && <NavBar />}
        {location.pathname.match(/ecwid/) && <EcwidNav />}

        <Container maxWidth="sm" className={classes.container}>
          <Switch>
            <Route exact path="/" component={PlayList} />
            <Route exact path="/episode/:episodeId" component={Episode} />
            <Route exact path="/chapters/:episodeId" component={Chapters} />
            <Route exact path="/chapter" component={Chapter} />
            <Route exact path="/episodes" component={Episodes} />
            <Route exact path="/podgroup/:id" component={PodGroup} />
            <Route exact path="/spring" component={Spring} />

            <Route exact path="/test" component={Test} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/explore" component={Explore} />
            <Route
              exact
              path="/group/:category"
              component={ExploreDetail}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/ecommerce" component={ecommerce} />
            <Route exact path="/ecwid" component={Ecwid} />
            {/* <Route exact path="/playlist" component={PlayList} /> */}
            <Route path="/" render={() => <div>404 page</div>} />
          </Switch>
          {(location.pathname.match(/episode/) ||
            location.pathname.match(/podgroup/) ||
            location.pathname.match(/chapters/) ||
            location.pathname.match(/ecommerce/) ||
            location.pathname.match(/episodes/)) && (
            <Route path="/" render={(props) => returnMainPlayer(props)} />
          )}

          {(location.pathname === "/" ||
            location.pathname.match(/profile/) ||
            location.pathname.match(/playlist/) ||
            location.pathname.match(/search/) ||
            location.pathname.match(/explore/) ||
            location.pathname.match(/login/)) && (
            <Route path="/" component={BottomNavigation} />
          )}
        </Container>
      </Suspense>
    </div>
  );
};

export default withRouter(CurrentSection);
