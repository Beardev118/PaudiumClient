import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Paper, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import BookmarkIcon from "../../components/MediaPlayer/Components/Icons/BookmarkIconFilled";

import PodcastList from "./PodcastList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flex: "1 0 auto",
  },

  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
  },

  title: {
    marginBottom: 33,
  },
  imageWrapper: {
    borderRadius: 4,
  },
}));

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid rgba(255,255,255,0.4)",
  },
  indicator: {
    backgroundColor: "#FFF",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    // minWidth: 72,
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(4),
    color: "#FFF",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#FFF",
      opacity: 1,
    },
    "&$selected": {
      color: "#FFF",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#FFF",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function PodGroup({ match }) {
  console.log("Podgroup match", match);
  const id = match.params.id;
  console.log(id);
  const {
    loading,
    error,
    // data: dataPod,
    data,
  } = useQuery(GET_PODGROUP, { variables: {id} });

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const dataPod = data&&data.podgroup;


  console.log("dataPod", dataPod);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box mt={5}>
        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={5}
          alignItems="flex-end"
        >
          <Grid item xs={5}>
            <Paper elevation={3} className={classes.imageWrapper}>
              <img
                src={dataPod && dataPod.podImage}
                width="100%"
                alt="post"
              />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Typography
              variant="h5"
              align="left"
              className={classes.title}
              color="secondary"
            >
              {console.log("dataPod", dataPod)}
              {dataPod && dataPod.title}
            </Typography>
            <Button
              className={classes.controls}
              variant="outlined"
              fullWidth
              color="secondary"
              startIcon={<BookmarkIcon color="secondary" />}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Box>

      <AntTabs
        value={value}
        onChange={handleChange}
        aria-label="simple AntTabs example"
        variant="fullWidth"
      >
        <AntTab label="Episodes (10)" />
        <AntTab label="Community" />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <PodcastList podcasts={dataPod && dataPod.podcasts} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Community
      </TabPanel>
    </div>
  );
}

const GET_PODGROUP = gql`
  query($id: ID!) {
    podgroup(podgroupId: $id) {
      id
      podTitle
      podImage
      podcasts {
        id
        imageURL
        title
        audioURL
      }
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
