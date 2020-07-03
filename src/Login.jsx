import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container212: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    allignItems: "center",
    height: "500",
    width: "900",
  },
  Banner: {
    display: "flex",
    justifyContent: "center",
    allignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingTop: 25,
  },
  Fb: {
    display: "flex",
    justifyContent: "center",
    allignItems: "center",
    backgroundColor: "white",
    paddingTop: 50,
    flexDirection: "row",
  },
  SignIn: {
    display: "flex",
    justifyContent: "center",
    allignItems: "center",
    backgroundColor: "white",
    paddingTop: 75,
    flexDirection: "column",
    justufyContent: "space-between",
  },
}));
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.container212}>
      <div className={classes.Banner}>
        <img className={classes.image} src={require("./zaful.png")} />
      </div>
      <div>
        <div className={classes.Fb}>
          <p> Welcome to ZAFUL, Use Your Account from</p>
          <IconButton>
            <a href="#">
              <FacebookIcon />
            </a>
          </IconButton>
        </div>
        <div className={classes.SignIn}>
          <TextField id="Email" label="Email" variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
