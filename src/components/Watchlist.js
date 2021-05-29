import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Apple from "../images/apple.svg";
import Tesla from "../images/tesla.svg";
import Reliance from "../images/reliance.svg";
import Facebook from "../images/facebook.svg";
import Amazon from "../images/amazon.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  stock: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  deleteButton: {
    position: "absolute",
    right: "0",
    top: "50%",
    bottom: "50%",
    paddingRight: "0.2rem",
  },
  image: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: " 0 0.8rem",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const Watchlist = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="subtitle1" style={{ textAlign: "left" }}>
        Watchlist
      </Typography>
      <Divider style={{ margin: "0.4rem 0" }} />
      <div className={classes.container}>
        <article className={classes.stock}>
          <img src={Reliance} alt="" className={classes.image} />
          <div className={classes.textContainer}>
            <Typography variant="subtitle1" style={{ margin: "0 0.4rem" }}>
              RELIANCE
            </Typography>
            <Typography variant="subtitle2" style={{ margin: "0 0.4rem" }}>
              Reliance Inc
            </Typography>
            <IconButton aria-label="delete" className={classes.deleteButton} size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        </article>
        <Divider style={{ margin: "0.5rem 0" }} />
        <article className={classes.stock}>
          <img src={Tesla} alt="" className={classes.image} />
          <div className={classes.textContainer}>
            <Typography variant="subtitle1" style={{ margin: "0 0.4rem" }}>
              TSLA
            </Typography>
            <Typography variant="subtitle2" style={{ margin: "0 0.4rem" }}>
              Tesla Inc
            </Typography>
            <IconButton aria-label="delete" className={classes.deleteButton} size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        </article>
        <Divider style={{ margin: "0.5rem 0" }} />
        <article className={classes.stock}>
          <img src={Apple} alt="" className={classes.image} />
          <div className={classes.textContainer}>
            <Typography variant="subtitle1" style={{ margin: "0 0.4rem" }}>
              APPL
            </Typography>
            <Typography variant="subtitle2" style={{ margin: "0 0.4rem" }}>
              Apple Inc
            </Typography>
            <IconButton aria-label="delete" className={classes.deleteButton} size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        </article>
        <Divider style={{ margin: "0.5rem 0" }} />
        <article className={classes.stock}>
          <img src={Facebook} alt="" className={classes.image} />
          <div className={classes.textContainer}>
            <Typography variant="subtitle1" style={{ margin: "0 0.4rem" }}>
              FB
            </Typography>
            <Typography variant="subtitle2" style={{ margin: "0 0.4rem" }}>
              Facebook Inc
            </Typography>
            <IconButton aria-label="delete" className={classes.deleteButton} size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        </article>
        <Divider style={{ margin: "0.5rem 0" }} />
        <article className={classes.stock}>
          <img src={Amazon} alt="" className={classes.image} />
          <div className={classes.textContainer}>
            <Typography variant="subtitle1" style={{ margin: "0 0.4rem" }}>
              AMZN
            </Typography>
            <Typography variant="subtitle2" style={{ margin: "0 0.4rem" }}>
              Amazon COM Inc
            </Typography>
            <IconButton aria-label="delete" className={classes.deleteButton} size="small">
              <DeleteIcon />
            </IconButton>
          </div>
        </article>
        <Divider style={{ margin: "0.5rem 0" }} />
      </div>
    </React.Fragment>
  );
};

export default Watchlist;
