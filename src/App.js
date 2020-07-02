import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import Nav from "./appBar";
import Banner from "./banner";
import Plant from "./plant.jpg";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Plant})`,
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <Nav />
        </Grid>

        <Grid item container>
          <Grid item xs={1} sm={2}></Grid>
          <Grid item xs={10} sm={8}>
            <Banner></Banner>
          </Grid>
          <Grid item xs={1} sm={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
