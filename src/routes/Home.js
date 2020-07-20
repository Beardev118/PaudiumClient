import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles'
import { Button, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Splash from "./Splash/Splash";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme)=>{
 
});
export default function Home() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
       
        <Grid container justify="center">
          {loading ? (
            <Splash />
          ) : (
            <Button
              variant="contained"
              onClick={() => history.push("/podcast")}
            >
              Go to podcast
            </Button>
          )}
        </Grid>
      </Container>
    </div>
  );
}
