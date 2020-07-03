import React from "react";
import { Grid } from "@material-ui/core";
import Banner from "./banner";
const Home = () => {
  return (
    <Grid item container>
      <Grid item xs={1} sm={2}></Grid>
      <Banner />
      <Grid item xs={1} sm={2}></Grid>
    </Grid>
  );
};
export default Home;
