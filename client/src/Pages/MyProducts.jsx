import React from "react";
import { Container } from "reactstrap";
import NavBar from "../Components/Navbar/Navbar";
import Products from "../Components/Products/Products";

const MyProducts = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Products />
      </Container>
    </div>
  );
};

export default MyProducts;
