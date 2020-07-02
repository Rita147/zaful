import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  banner: {
    paddingTop: "15px",
  },
  BannerContainer: {
    position: "relative",
    display: "block",
    justifyContent: "center",
    allignItems: "center",
    position: "absolute",
  },
  background: {
    backgroundImage: `url(require("./plant.jpg"))`,
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.BannerContainer}>
      <img height="600" width="400" src={require("./dressN2.jpg")} />
      <img height="500" width="400" src={require("./dressN1.jpg")} />
    </div>
  );
};
export default Banner;
