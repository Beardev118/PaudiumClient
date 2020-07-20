import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const LoginButton = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#FFF",
    borderRadius: "4px",
  },
}))((props) => <Button disableRipple {...props} />);

const SignTextField = withStyles((theme) => ({
  root: {
    borderColor: "#FFF",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "4px",
    marginTop: theme.spacing(2),
  },
}))((props) => <TextField {...props} />);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    marginTop: theme.spacing(3),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      history.push('/podcast');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="secondary">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SignTextField
                error={errors.username ? true : false}
                helperText={errors.username ? errors.username : ""}
                onChange={(event) => onChange(event)}
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                id="username"
                // label="Last Name"
                name="username"
                placeholder="Enter your name"
              />
            </Grid>
            <Grid item xs={12}>
              <SignTextField
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : ""}
                onChange={(event) => onChange(event)}
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                placeholder="Enter your email"
              />
            </Grid>
            <Grid item xs={12}>
              <SignTextField
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : ""}
                onChange={(event) => onChange(event)}
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                placeholder=" Password"
              />
            </Grid>
            <Grid item xs={12}>
              <SignTextField
                error={errors.confirmPassword ? true : false}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword : ""
                }
                onChange={(event) => onChange(event)}
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                // label="Password"
                type="password"
                id="password"
                placeholder=" Confirm Password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
                color = "secondary"
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? <Link href="/login">Sign in</Link>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}


const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
