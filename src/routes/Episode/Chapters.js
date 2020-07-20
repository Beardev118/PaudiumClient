import React from "react";
import { Container, Paper, IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Chapter from "./Components/Chapter";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const useStyle = makeStyles((theme) => ({
  title: {
    alignItems: "center",
  },
  container: {
    position: "fixed",
    borderRadius: 0,
    top: 0,
    left: 0,
    height: "100vh",
  },
}));

export default function Chapters({ match }) {
  const episodeId = match.params.episodeId;
  const { loading: loadingPod, error: errorPod, data: chapters } = useQuery(
    GET_EPISODE,
    {
      variables: { episodeId },
    }
  );

  const classes = useStyle();
  const history = useHistory();
  return (
    <Paper className={classes.container}>
      <Container>
        <Grid container direction="column">
          <Grid item container justify="space-between" alignItems="center">
            <Grid item xs={1}></Grid>
            <Grid item className={classes.title}>
              <Typography>Episode Section</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => history.push("/podcast")}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container>
            {chapters&&chapters.getPodcast.chapters.map((chapter) => (
              <Chapter chapter = {chapter} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

const GET_EPISODE = gql`
  query($episodeId: ID!) {
    getPodcast(podcastId: $episodeId) {
      chapters {
        id
        startTimeStamp
        endTimeStamp
        title
      }
    }
  }
`;
