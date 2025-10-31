import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import axios from "axios";
import Navbar from "./Navbar";

axios.defaults.baseURL = "http://localhost:3000/";

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
  textField: {
    [`& fieldset`]: {
      borderRadius: 500,
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();
  const [user, setUser] = useState({
    // first_name: "",
    // username: "",
    email: "",
    password: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async () => {
    window.alert("postdata");
    const { first_name, username, email, password } = user;

    // const res = await axios.get("/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     first_name,
    //     username,
    //     email,
    //     password,
    //   }),
    // });
    const res = await axios.post("/auth/", {
     // first_name,
     // username,
      email,
      password,
    });

    //const data = await res.json();
    const data = await res;
    if (data) window.alert("data received");

    console.log(data);

    if (res.status === 422 || !data) {
      window.alert("INVALID REGES");
      console.log("INVALID REGES");
    } else if(res.status==400) {
        window.alert("Please enter all req fields")
    }
    else {
      window.alert("REG SUCCESFUL");
      console.log("REG SUCCESFUL");

      history.push("/signin");
    }
  };

  return (
    <div>
      <Navbar />
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white",
          borderRadius: "40px",
          height: "550px",
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={faSchool} color="black" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up As Peer Student
          </Typography>
          <div className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="TextField-without-border-radius">
                  <TextField
                    autoComplete="fname"
                    name="first_name"
                    variant="outlined"
                 //   required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    autoFocus
                    value={user.first_name}
                    onChange={handleInputs}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
             //     required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="Username"
                  value={user.username}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={PostData}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
}
