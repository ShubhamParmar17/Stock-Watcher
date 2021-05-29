import React from "react";
import { Grid, Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Apple from "../images/apple.svg";

const data = [
  {
    item: "Open",
    value: "126.01",
  },
  {
    item: "High",
    value: "127.94",
  },
  {
    item: "Low",
    value: "125.94",
  },
  {
    item: "close",
    value: "127.10",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  gridItemContainer1: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  gridItemContainer2: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  addBtn: {
    position: "absolute",
    top: "0",
    right: "0",
  },
  logo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginInline: theme.spacing(1),
    padding: theme.spacing(1),
  },
  ohlc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  ohlcTitle: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.subtitle2.fontWeight,
    fontSize: theme.typography.subtitle2.fontSize,
    lineHeight: theme.typography.subtitle2.lineHeight,
    letterSpacing: theme.typography.subtitle2.letterSpacing,
  },
}));

function StockHeader() {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Button variant="contained" color="primary" size="small" className={classes.addBtn}>
        Add
      </Button>
      <Grid item xs={12} md={4} className={classes.gridItemContainer1}>
        <img src={Apple} alt="apple" className={classes.logo} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "0.8rem",
          }}
        >
          <Typography variant="h6" color="textPrimary" style={{ fontWeight: "500" }}>
            Apple Inc
          </Typography>
          <Typography variant="subtitle1">APPL</Typography>
          <Typography variant="subtitle2">NASDAQ</Typography>
        </div>
      </Grid>
      <Grid item xs={6} md={4} className={classes.gridItemContainer2}>
        <Typography variant="subtitle1" style={{ fontWeight: "500", fontSize: "1.1rem" }}>
          <span style={{ fontSize: "0.875rem", lineHeight: "1.57" }}>CMP: </span> 129.10
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "500", fontSize: "1.1rem", color: "rgba(0, 0, 0, 0.54)" }}>
          (+1.29)
        </Typography>
      </Grid>
      <Grid item xs={6} md={3} className={classes.gridItemContainer2}>
        <Typography variant="subtitle1" style={{ fontWeight: "500", fontSize: "1.1rem" }}>
          <span style={{ fontSize: "0.875rem", lineHeight: "1.57" }}>52week H: </span> 145.09
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "500", fontSize: "1.1rem" }}>
          <span style={{ fontSize: "0.875rem", lineHeight: "1.57" }}>52week L: </span> 79.30
        </Typography>
      </Grid>
      <Divider variant="middle" style={{ width: "100%", height: "2px", margin: "0.8rem auto" }} />
      <Grid item xs={12}>
        <div className={classes.ohlc}>
          {data.map((x, index) => {
            return (
              <Typography variant="subtitle1" style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                <span className={classes.ohlcTitle}>{x.item}: </span>
                {x.value}
              </Typography>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
}

export default StockHeader;
