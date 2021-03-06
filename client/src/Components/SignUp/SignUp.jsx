import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import styles from "./SignUp.module.css";

const SignUp = () => {
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
            <Form className={`${styles.form} ${styles.customer}`}>
              <FormGroup>
                <Label>Name</Label>
                <Input name="name" type="text"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input name="email" type="email"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Mobile</Label>
                <Input name="mobile" type="tel"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input name="password" type="password"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Address</Label>
                <Input name="address" type="textarea"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Food Preference</Label>
                <Input type="select">
                  <option value="veg">Vegitarian</option>
                  <option value="non">Non Vegitarian</option>
                </Input>
              </FormGroup>
              <div className={styles.center}>
                <Button color="success" type="submit">
                  SignUp
                </Button>
              </div>
            </Form>
          ) : null}
          {RestaurantToggle ? (
            <Form className={`${styles.form} ${styles.customer}`}>
              <FormGroup>
                <Label>Restaurant Name</Label>
                <Input name="name" type="text"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Business Email</Label>
                <Input name="email" type="email"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Business Mobile</Label>
                <Input name="mobile" type="tel"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input name="password" type="password"></Input>
              </FormGroup>
              <div className={styles.center}>
                <Button color="primary" type="submit">
                  SignUp
                </Button>
              </div>
            </Form>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
