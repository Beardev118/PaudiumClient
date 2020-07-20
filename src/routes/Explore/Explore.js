import React, { useLayoutEffect, useState } from "react";
import PodgroupSwipe from "./Components/PodgroupSwipe";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Loading from "../../components/CircluarProgress";
const useStyles = makeStyles((theme) => ({
  appbar: {
    height: 44,
  },
  categoryPP: {
    fontSize: 20,
    fontWeight: 500,
  },
  container: {
    marginBottom: 30,
    marginTop: 10,
  },
  swiper: {
    marginTop: 20,
  },
  link: {
    color: "#FFF",
  },
}));

const GET_CATEGORY = gql`
  {
    getCategories
  }
`;

export default function Explore() {
  const classes = useStyles();
  const {
    loading: loadingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQuery(GET_CATEGORY);

  return (
    <div className={classes.container}>
      {dataCategory ? (
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justify="flex-start"
        >
          {dataCategory.getCategories.map((category) => (
            <Grid item xs={12} sm={6}>
              <Grid
                item
                xs={12}
                container
                justify="space-between"
                direction="row"
              >
                <Typography
                  className={classes.categoryPP}
                  color="secondary"
                  variant="h5"
                >
                  {category}
                </Typography>
                <Link
                  component={RouterLink}
                  to={`group/${category}`}
                  className={classes.link}
                >
                  <Typography variant="body1">See All</Typography>
                </Link>
              </Grid>
              <PodgroupSwipe category={category} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loading />
      )}
    </div>
  );
}