import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import PodcastList from "./Podcast/PodcastList";

const useStyles = makeStyles((theme) => ({}));

export default function Episodes() {
  const { loading: loadingPod, error: errorPod, data: dataPod } = useQuery(
    GET_PODCAST
  );
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <PodcastList podcasts={dataPod && dataPod.podcasts} />;
}

const GET_PODCAST = gql`
  {
    podcasts {
      id
      title
      imageURL
      audioURL
      podTitle
    }
  }
`;
