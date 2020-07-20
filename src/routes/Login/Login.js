import React, { useState, useContext } from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import GoogleIcon from "./GoogleIcon";
import { AuthContext } from "../../GlobalState/AuthContext";

import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

const LoginButton = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#FFF",
    borderRadius: "4px",
  },
}))((props) => <Button disableRipple {...props} />);

const LoginTextField = withStyles((theme) => ({
  root: {
    borderColor: "#FFF",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "4px",
    marginTop: theme.spacing(2),
  },
}))((props) => <TextField {...props} />);

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const contextAuth = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [addUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, {data:{login:userData}}) {
      console.log(userData);
      contextAuth.login(userData);
      history.push("/podlist");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  console.log(values);

  return (
    <Box mt={6} px={2}>
      <Grid container justify="space-evenly" spacing={3} direction="column">
        <Button variant="outlined" color="secondary" startIcon={<GoogleIcon />}>
          {" "}
          Continue with Google
        </Button>
        <form className={classes.form}>
          <LoginTextField
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email : ""}
            variant="outlined"
            placeholder="Enter your email"
            fullWidth
            name="email"
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <LoginTextField
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password : ""}
            placeholder="Enter your password"
            fullWidth
            name="password"
            type = "password"
            variant="outlined"
            color="secondary"
            onChange={(e) => handleChange(e)}
          />
          <LoginButton variant="contained" fullWidth onClick={handleSubmit}>
            Login
          </LoginButton>
        </form>

        <Typography color="secondary" align="center">
          Don't have an account? <Link to="./signup">Sign up</Link> for free
        </Typography>
      </Grid>
    </Box>
  );
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
