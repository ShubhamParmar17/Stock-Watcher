import { InputBase } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";

function Search() {
  const classes = useStyles();

  return (
    <InputBase
      className={classes.input}
      placeholder="Enter ticker symbol"
      endAdornment={<SearchIcon style={{ marginRight: "0.4rem" }} />}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
    padding: " 0 0.4rem",
    opacity: "0.6",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
}));

export default Search;
