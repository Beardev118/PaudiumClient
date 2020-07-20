import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { ReactComponent as ShoppingBagIcon } from "./shopping_bag.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    flexGrow: 1,
    color: "#FFF",
    alignItems: "center",
    width: "100vw",
  },
}));

export default function EcwidHeader() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={1}>
        <Toolbar>
          <div className={classes.title}>
            <IconButton onClick={() => history.goBack()} color="secondary">
              <KeyboardBackspaceIcon />
            </IconButton>
            <Typography variant="h5">Ecommerce</Typography>
          </div>
          <div
            data-layout="COUNTER_ONLY"
            data-icon="BAG"
            className="ec-cart-widget"
          ></div>
          <ShoppingBagIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
