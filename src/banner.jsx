import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "font-size": "15px",
    color: "black",
    backgroundColor: "white",
    position: "relative",
    flexDirection: "row",
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
    <div>
      <div className={classes.title}>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          New
        </Button>
        <Button
          style={{ color: "#fe5269", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          Swimwear
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          Women
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          Tops
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          Dresses
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          men
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          activewear
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          accesories
        </Button>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          href="#contained-buttons"
        >
          sale
        </Button>
      </div>
      <div className={classes.BannerContainer}>
        <img height="600" width="400" src={require("./dressN2.jpg")} />
        <img height="500" width="400" src={require("./dressN1.jpg")} />
      </div>
    </div>
  );
};
export default Banner;
