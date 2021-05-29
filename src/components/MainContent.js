import React from "react";
import { StockHeader, Chart } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function MainContent() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <StockHeader />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} style={{ marginTop: "2rem" }}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} style={{ marginTop: "2rem" }}>
          <Chart />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MainContent;
