import React from "react";
import { Router } from "@reach/router";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import MyProducts from "./Pages/MyProducts";
import { OrdersPage } from "./Pages/OrdersPage";

const Routes = () => {
  return (
    <Router>
      <HomePage path="/" />
      <SignUpPage path="/signup" />
      <LoginPage path="/login" />
      <MyProducts path="/myproducts" />
      <OrdersPage path="/orders" />
    </Router>
  );
};

export default Routes;
