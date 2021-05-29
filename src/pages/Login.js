import React from "react";
import { Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import loginImg from "../images/login-img.svg";

const Login = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <img className={classes.img} src={loginImg} alt="login page" />
      <Typography className={classes.title} variant="h4" color="textPrimary">
        Stock Watcher User
      </Typography>
      <Button variant="contained">login/ sign up</Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "100vh",
    width: "90vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    marginBottom: "2rem",
  },

  title: {
    marginBottom: "1.5rem",
  },
}));

export default Login;
