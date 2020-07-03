import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./appBar";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}
export default App;
