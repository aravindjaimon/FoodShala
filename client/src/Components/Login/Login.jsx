import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { PostData } from "./../../Services/PostData";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CustomerLogin = () => {
    const body = { email: email, pass: password, type: "customer" };
    PostData("login", body);
  };
  const RestaurantLogin = () => {
    const body = { email: email, pass: password, type: "restaurant" };
    PostData("login", body);
  };

  const [CustomerToggle, SetCustomerToggle] = useState(false);
  const [RestaurantToggle, setRestaurantToggle] = useState(false);
  const [clicked, setClicked] = useState(true);

  const toggleCustomer = () => {
    SetCustomerToggle(true);
    setRestaurantToggle(false);
    setClicked(false);
  };

  const toggleRestaurant = () => {
    SetCustomerToggle(false);
    setRestaurantToggle(true);
    setClicked(false);
  };

  return (
    <Container className={styles.main}>
      <Row>
        <Col md="6">
          <div className={`${styles.center} ${styles.full}`}>
            <Button
              onClick={toggleCustomer}
              outline
              color="success"
              className={styles.button}
            >
              Customer
            </Button>
            <Button
              onClick={toggleRestaurant}
              outline
              color="primary"
              className={styles.button}
            >
              Restaurant
            </Button>
          </div>
        </Col>
        <div className={styles.line}></div>
        <Col md="5" className={styles.center}>
          {clicked && <h1>Select A User Type</h1>}
          {CustomerToggle ? (
            <div className={`${styles.form} ${styles.customer}`}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  value={email}
                  type="email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  value={password}
                  type="password"
                ></Input>
              </FormGroup>
              <div className={styles.center}>
                <Button color="success" type="submit" onClick={CustomerLogin}>
                  Login
                </Button>
              </div>
            </div>
          ) : null}
          {RestaurantToggle ? (
            <div className={`${styles.form} ${styles.customer}`}>
              <FormGroup>
                <Label>Business Email</Label>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  type="email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                ></Input>
              </FormGroup>
              <div className={styles.center}>
                <Button onClick={RestaurantLogin} color="primary" type="submit">
                  Login
                </Button>
              </div>
            </div>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
