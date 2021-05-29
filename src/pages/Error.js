import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Error = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h1" color="textPrimary" className={classes.title}>
        404
      </Typography>
      <Typography variant="subtitle1" paragraph>
        sorry, the page you tried cannot be found
      </Typography>
      <Button variant="contained" color="primary">
        <Link to="/" className={classes.link}>
          back home
        </Link>
      </Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "10rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none !important",
  },
}));

export default Error;
