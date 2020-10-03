import React from "react";
import { Router } from "@reach/router";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";

const Routes = () => {
  return (
    <Router>
      <HomePage path="/" />
      <SignUpPage path="/signup" />
      <LoginPage path="login" />
    </Router>
  );
};

export default Routes;
