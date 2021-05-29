import React from "react";
import { Container, AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar className={classes.navbar}>
          <Typography variant="h6">Stock Watcher</Typography>
          <Avatar alt="shubham parmar" src="" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const useStyles = makeStyles(() => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default Navbar;
