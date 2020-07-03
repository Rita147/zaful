import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container212: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    width: "100%",
  },
  title: {
    display: "flex",

    color: "black",
    backgroundColor: "white",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  offers: {
    display: "flex",
    fontSize: "16px",
    color: "black",
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  banner: {
    paddingTop: "15px",
  },
  BannerContainer: {
    paddingTop: 25,
    display: "flex",
    justifyContent: "center",
    allignItems: "center",
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.container212}>
      <div className={classes.title}>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          href="#contained-buttons"
        >
          Sale
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          accesories
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          Activewear
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          Men
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          Dresses
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          Tops
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          Women
        </Button>
        <Button
          style={{
            color: "#fe5269",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          Swimwear
        </Button>
        <Button
          style={{
            color: "#2c3530",
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: "12px",
          }}
          href="#contained-buttons"
        >
          New
        </Button>
      </div>
      <div className={classes.offers}>
        <Button
          style={{
            maxWidth: "200px",
            maxHeight: "100px",
            minWidth: "100px",
            minHeight: "100px",
            color: "#2c3530",
            backgroundColor: "#f8f8f8",
            fontWeight: "bold",
          }}
          href="#contained-buttons"
        >
          Returns extended ! 60 days to return ➪➪
        </Button>
        <Button
          style={{
            maxWidth: "250px",
            maxHeight: "100px",
            minWidth: "100px",
            minHeight: "100px",
            color: "#2c3530",
            backgroundColor: "#f8f8f8",
            fontWeight: "bold",
          }}
          href="#contained-buttons"
        >
          First Order Extra 15% Off Shop now ➪➪
        </Button>
        <Button
          style={{
            maxWidth: "220px",
            maxHeight: "100px",
            minWidth: "100px",
            minHeight: "100px",
            color: "#2c3530",
            backgroundColor: "#f8f8f8",
            fontWeight: "bold",
          }}
          href="#contained-buttons"
        >
          FREE SHIPPING OVER $180 Shipping Info ➪➪
        </Button>
      </div>
      <div className={classes.BannerContainer}>
        <img height="500" width="900" src={require("./dress.jpg")} />
      </div>
    </div>
  );
};
export default Banner;
