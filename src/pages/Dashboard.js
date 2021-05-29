import React from "react";
import { Navbar, Search, Watchlist, MainContent, Chart } from "../components";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "95vh",
    flexGrow: 1,
    alignItems: "flex-start",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <main>
      <Navbar />
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8} md={5} style={{ margin: "85px auto 0" }}>
            <Paper className={classes.paper} style={{ padding: "8px" }}>
              <Search />
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} style={{ marginTop: "25px" }}>
            <MainContent />
          </Grid>

          <Grid item xs={12} md={4} style={{ marginTop: "25px" }}>
            <Paper className={classes.paper}>
              <Watchlist />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Dashboard;
