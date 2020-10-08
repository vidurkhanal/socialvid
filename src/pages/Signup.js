import React from "react";
import "./login.css";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import firebase from "firebase";
import * as ROUTES from "../constant/Routes";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // SEND TO HOME
        db.collection("users").add({
          uid: result.user.uid,
          fullName,
          userName,
        });
      })
      .then(() => history.push(ROUTES.HOME))
      .catch((error) => {
        setError(error);
        setPassword("");
        setProcessing(false);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__hero">
          <img src="/logo.png" alt="Social Braket" />
        </div>
        <div className="login__form">
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert
                severity="error"
                onClose={() => {
                  setError(null);
                }}
              >
                <AlertTitle>{error.code}</AlertTitle>
                <strong>{error.message}</strong>
              </Alert>
            )}
            <TextField
              label="Enter Your Full Name"
              variant="outlined"
              color="primary"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={error ? true : false}
            />
            <TextField
              label="Enter Your Username "
              variant="outlined"
              color="primary"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              error={error ? true : false}
            />
            <TextField
              label="Enter Your Email"
              variant="outlined"
              color="primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error ? true : false}
            />

            <TextField
              label="Enter Your Password"
              variant="outlined"
              type="password"
              color="primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error ? true : false}
            />
            <Button type="submit" disabled={processing ? true : false}>
              {!processing ? (
                "Create An Account"
              ) : (
                <CircularProgress color="inherit" />
              )}
            </Button>
            <p>OR</p>
            <Button variant="outlined" href={ROUTES.LOGIN}>
              Already Have An Account ? Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
