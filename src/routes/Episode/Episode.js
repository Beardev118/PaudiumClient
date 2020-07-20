import React, { useRef, useContext, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from 'react-spring'
import { useHistory } from "react-router-dom";

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import { GlobalContext } from "../../GlobalState/GlobalState";
import { ACTION } from "../../Const/Action";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
}));

export default function Episode({ match }) {
  const classes = useStyles();
  const [{ x }, set] = useSpring(() => ({ x: 0}))
  const history = useHistory();
  let episodeId = match.params.episodeId;

  const { loading: loadingPod, error: errorPod, data: episode } = useQuery(
    GET_EPISODE,
    {
      variables: { episodeId },
    }
  );

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0});
    if(mx < -200){
      history.push(`/ecommerce`);
    }
  });


  return (
    <div className={classes.root}>
      <animated.div {...bind()} style={{ x }}>
        <CardMedia
          component="img"
          alt={episode && episode.getPodcast.title}
          image={episode && episode.getPodcast.imageURL}
          title={episode && episode.getPodcast.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="secondary"
            align="center"
          >
            {episode && episode.getPodcast.title}
          </Typography>
          <Typography variant="body1" color="secondary">
            {episode && episode.getPodcast.description}
          </Typography>
        </CardContent>
      </animated.div>
    </div>
  );
}

const GET_EPISODE = gql`
  query($episodeId: ID!) {
    getPodcast(podcastId: $episodeId) {
      id
      title
      imageURL
      audioURL
      description
    }
  }
`;
