import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    height: "100px",
  },

  createdBy: {
    padding: 10,
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h2 className={styles.createdBy}>This site is created by sina =) </h2>
    </div>
  );
};

export default Footer;
