import React from "react";
import { ReactComponent as NoPlayListIcon } from "./asset/box.svg";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  noListContainer: {
    height: "calc(100vh - 100px);",
    width:"70%",
    marginLeft:"auto",
    marginRight:"auto",
  },
}));

export default function NoPlayList() {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.noListContainer}
      direction="column"
    >
      <NoPlayListIcon />
      <Box mt={4} mb={6}>
        <Typography color="secondary" gutterBottom align="center">
          You have'nt added episodes
         or podcasts.
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          history.push("/explore");
        }}
      >
        Explore
      </Button>
    </Grid>
  );
}
